const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const { v4: uuidv4 } = require('uuid');

exports.enqueueUser = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', '認証されていないアクセスはできません。');
  }

  const db = admin.firestore();
  const userId = context.auth.uid;
  const topic = data.topic;
  const roomId = data.roomId || null;  // クライアントから提供されるルームID

  const matchingPromise = db.runTransaction(async (transaction) => {
    if (roomId) {
      // 特定のルームIDへの参加を試みる
      const roomRef = db.collection('waiting_list').doc(roomId);
      const roomDoc = await transaction.get(roomRef);

      if (roomDoc.exists && roomDoc.data().topic === topic) {
        // マッチング成功: セッション作成
        const newSessionId = await createSessionWithParticipant(transaction, db, userId, roomDoc.data().userId, topic);
        // マッチしたルームを待機リストから削除
        transaction.delete(roomRef);
        return { matched: true, session_id: newSessionId };
      } else {
        // 指定したルームには参加できない
        return { matched: false, error: "指定されたルームは存在しないか、トピックが一致しません。" };
      }
    } else {
      // 通常のマッチングプロセス
      return await matchWithWaitingUser(transaction, db, userId, topic);
    }
  });

  const result = await matchingPromise;
  if (result.matched) {
    return { status: "matched", session_id: result.session_id, topic: topic };
  } else if (result.error) {
    return { status: "error", message: result.error };
  } else {
    return { status: "waiting", topic: topic };
  }
});

// 他ユーザーとのマッチングロジック
async function matchWithWaitingUser(transaction, db, userId, topic) {
  const waitingListRef = db.collection('waiting_list').where('topic', '==', topic).limit(1);
  const snapshot = await transaction.get(waitingListRef);

  if (!snapshot.empty) {
    const doc = snapshot.docs[0];
    // セッション作成ロジック
    const newSessionId = await createSessionWithParticipant(transaction, db, userId, doc.data().userId, topic);
    // マッチしたルーム削除
    transaction.delete(db.collection('waiting_list').doc(doc.id));
    return { matched: true, session_id: newSessionId };
  } else {
    // 新規ルーム作成
    const myRoomId = uuidv4();
    transaction.set(db.collection('waiting_list').doc(myRoomId), {
      userId: userId,
      topic: topic,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    return { matched: false };
  }
}

// セッション作成ヘルパー関数
async function createSessionWithParticipant(transaction, db, userId1, userId2, topic) {
  const newSessionRef = db.collection('sessions').doc();
  transaction.set(newSessionRef, {
    participants: [userId1, userId2],
    topic: topic,
    isActive: true,
    startTime: admin.firestore.FieldValue.serverTimestamp(),
  });

  // 参加ユーザーにセッションIDを紐づける
  const userRef1 = db.collection('users').doc(userId1);
  const userRef2 = db.collection('users').doc(userId2);
  transaction.set(userRef1, { sessionId: newSessionRef.id }, { merge: true });
  transaction.set(userRef2, { sessionId: newSessionRef.id }, { merge: true });

  return newSessionRef.id;
}