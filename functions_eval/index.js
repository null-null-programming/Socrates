const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const Completions = require('./tools/completions');
const completions = new Completions();

function calculateEloRating(ra, rb, result, k = 32) {
    const ea = 1 / (1 + Math.pow(10, (rb - ra) / 400));
    const newRa = ra + k * (result - ea);
    return Math.round(newRa);
}

exports.evaluateDebate = functions.https.onCall(async (data, context) => {
    // 認証されているか確認
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
    }

    const { debate, my_debater_name, opponent_uid } = data;
    const uid = context.auth.uid;

    let evalResult;
    try {
        evalResult = await completions.getEvalResult(debate);
    } catch (error) {
        console.error('Error getting evaluation result:', error);
        throw new functions.https.HttpsError('internal', 'Failed to evaluate debate.');
    }

    console.log('debate:', debate);
    console.log('UID:', uid);
    console.log('Opponent UID:', opponent_uid);

    if(!debate || typeof debate !== 'string' || !debate.trim()) {
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid "debate".');
    }

    if (!uid || typeof uid !== 'string' || !uid.trim()) {
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid "uid".');
    }

    if (!opponent_uid || typeof opponent_uid !== 'string' || !opponent_uid.trim()) {
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid "opponent_uid".');
    }

    // Firestoreから現在のレートを取得
    const db = admin.firestore();
    const userRef = db.collection('users').doc(uid);
    const opponentRef = db.collection('users').doc(opponent_uid);
    const userDoc = await userRef.get();
    const opponentDoc = await opponentRef.get();

    if (!userDoc.exists || !opponentDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'User not found');
    }

    // ユーザーの現在のレートを取得
    const userRate = userDoc.data().rate || 1500;
    const opponentRate = opponentDoc.data().rate || 1500;

    console.log("userRate:", userRate);
    console.log("opponentRate:", opponentRate);
    console.log("evalResult:", evalResult);

    const evalResultKeys = Object.keys(evalResult);
    const opponentDebaterName = evalResultKeys.find(name => name !== my_debater_name);
    
    if (!opponentDebaterName) {
        throw new functions.https.HttpsError('not-found', 'Opponent debater not found in the evaluation result.');
    }
    
    const myScore = evalResult[my_debater_name].得点.合計;
    const opponentScore = evalResult[opponentDebaterName].得点.合計;

    // 勝敗に基づいて新しいレートを計算
    const newUserRate = calculateEloRating(userRate, opponentRate, myScore > opponentScore ? 1 : 0);
    const newOpponentRate = calculateEloRating(opponentRate, userRate, opponentScore > myScore ? 1 : 0);

    // Firestoreに新しいレートを更新
    await userRef.update({ rate: newUserRate });
    await opponentRef.update({ rate: newOpponentRate });

    return {
        result: evalResult,
        new_user_rate: newUserRate,
        new_opponent_rate: newOpponentRate,
    };
});
