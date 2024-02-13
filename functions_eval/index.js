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

    const { debate, myDebaterName, opponentUid } = data;
    const uid = context.auth.uid;

    let evalResult;
    try {
        evalResult = await completions.getEvalResult(debate);
    } catch (error) {
        console.error('Error getting evaluation result:', error);
        throw new functions.https.HttpsError('internal', 'Failed to evaluate debate.');
    }

    // Firestoreから現在のレートを取得
    const db = admin.firestore();
    const userRef = db.collection('users').doc(uid);
    const opponentRef = db.collection('users').doc(opponentUid);
    const userDoc = await userRef.get();
    const opponentDoc = await opponentRef.get();

    if (!userDoc.exists || !opponentDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'User not found');
    }

    // ユーザーの現在のレートを取得
    const userRate = userDoc.data().rate || 1500;
    const opponentRate = opponentDoc.data().rate || 1500;

    const evalResultKeys = Object.keys(evalResult.eval);
    const opponentDebaterName = evalResultKeys.find(name => name !== myDebaterName);
    
    if (!opponentDebaterName) {
        throw new functions.https.HttpsError('not-found', 'Opponent debater not found in the evaluation result.');
    }
    
    const myScore = evalResult.eval[myDebaterName].得点.合計;
    const opponentScore = evalResult.eval[opponentDebaterName].得点.合計;

    // 勝敗に基づいて新しいレートを計算
    const newUserRate = calculateEloRating(userRate, opponentRate, myScore > opponentScore ? 1 : 0);
    const newOpponentRate = calculateEloRating(opponentRate, userRate, opponentScore > myScore ? 1 : 0);

    // Firestoreに新しいレートを更新
    await userRef.update({ rate: newUserRate });
    await opponentRef.update({ rate: newOpponentRate });

    return {
        message: "Evaluation and rate update successful",
        new_user_rate: newUserRate,
        new_opponent_rate: newOpponentRate,
    };
});
