const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.matchUsersAndCreateSession = functions.firestore
    .document('waiting_list/{userId}')
    .onCreate(async (snap, context) => {
        // Firestoreのインスタンスを取得
        const db = admin.firestore();
        
        // 待機リストからユーザーを取得（この例では2人を想定）
        const snapshot = await db.collection('waiting_list').orderBy('timestamp').limit(2).get();

        if (snapshot.size < 2) {
            console.log("待機中のユーザーが足りません。");
            return;
        }

        const users = [];
        snapshot.forEach(doc => {
            users.push(doc.data().user_id);
        });

        // 新しいセッションを作成
        const sessionRef = db.collection('sessions').doc();
        await sessionRef.set({
            participants: users,
            isActive: true,
            startTime: admin.firestore.FieldValue.serverTimestamp(),
        });

        // 新しいディベートルームをセッションのサブコレクションとして作成
        const debateRef = sessionRef.collection('debate').doc();
        await debateRef.set({
            topic: "",
            state: "before_debate",
            participants: users,
            startTime: admin.firestore.FieldValue.serverTimestamp(),
            messages: [] // ディベート中に交わされるメッセージのリスト（初期は空）
        });

        console.log(`セッション ${sessionRef.id} とディベートルームが作成されました。`);

        // ユーザードキュメントにセッションIDを追加
        await Promise.all(users.map(userId => {
            const userRef = db.collection('users').doc(userId);
            return userRef.set({ sessionId: sessionRef.id }, { merge: true });
        }));

        // マッチングしたユーザーを待機リストから削除
        const deletes = snapshot.docs.map(doc => doc.ref.delete());
        await Promise.all(deletes);

        console.log(`マッチングしたユーザーにセッションIDが通知されました。`);
    });
