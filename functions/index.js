const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.matchUsersAndCreateSession = functions.firestore
  .document('waiting_list/{userId}')
  .onCreate(async (snap, context) => {
    const db = admin.firestore();
    try {
      await db.runTransaction(async (transaction) => {
        const waitingListSnapshot = await db.collection('waiting_list').orderBy('timestamp').limit(2).get();
        
        if (waitingListSnapshot.size < 2) {
          console.log("待機中のユーザーが足りません。");
          return;
        }

        const users = [];
        waitingListSnapshot.forEach(doc => {
          users.push(doc.data().user_id);
        });

        if (new Set(users).size !== users.length) {
          console.log("同一ユーザーでのマッチングを検出しました。");
          return;
        }

        const sessionRef = db.collection('sessions').doc();
        const sessionId = sessionRef.id;

        // ランダムに current_turn を選択
        const currentTurnIndex = Math.floor(Math.random() * users.length);
        const currentTurn = users[currentTurnIndex];

        // セッションドキュメントを作成
        transaction.set(sessionRef, {
          participants: users,
          isActive: true,
          current_turn: currentTurn,
          startTime: admin.firestore.FieldValue.serverTimestamp(),
        });

        // マッチングしたユーザーの users ドキュメントを更新して sessionId を設定
        users.forEach(userId => {
          const userRef = db.collection('users').doc(userId);
          transaction.update(userRef, { sessionId: sessionId });
        });

        // マッチングしたユーザーを待機リストから削除
        waitingListSnapshot.forEach(doc => {
          transaction.delete(doc.ref);
        });

        console.log(`セッション ${sessionId} とディベートルームが作成されました。`);
      });
    } catch (error) {
      console.error("Error creating session: ", error);
    }
  });

  exports.enqueueUser = functions.https.onCall(async (data, context) => {
    // ユーザー認証を確認
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
    }
  
    const db = admin.firestore();
    const userRequest = data;
    const waitingListRef = db.collection('waiting_list').doc(userRequest.user_id);
  
    await waitingListRef.set({
      user_id: userRequest.user_id,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
  
    return {status: "queued", user_id: userRequest.user_id};
  });
  
/*
  exports.postSessionMessage = functions.https.onCall(async (data, context) => {
    // ユーザー認証を確認
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
    }
  
    const db = admin.firestore();
    const { session_id, message } = data;
  
    const sessionRef = db.collection('sessions').doc(session_id);
  
    // セッションのドキュメントを安全に追加します。
    const messageRef = await sessionRef.collection('debate').add({
      sender: context.auth.uid,
      text: message.text,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      isChat: message.isChat
    });
  
    return { messageRefId: messageRef.id };
  });
*/