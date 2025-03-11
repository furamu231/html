// サンプルデータ（ユーザーリスト）
const users = [
  { id: 1, name: 'たかはし' },
  { id: 2, name: 'さとう' },
  { id: 3, name: 'すずき' }
];

// ユーザー検索ボタン
document.getElementById('searchBtn').addEventListener('click', () => {
  const inputId = Number(document.getElementById('userIdInput').value);
  
  // findメソッドを用いた配列の要素検索を行った。
  // 実装したコードを元に、findメソッドの使い方とその利便性を説明できる。
  // findメソッドでIDが一致するユーザーを検索
  const user = users.find(user => user.id === inputId);

  if (user) {
    document.getElementById('result').textContent = `ユーザー名: ${user.name}`;
  } else {
    document.getElementById('result').textContent = 'ユーザーが見つかりませんでした';
  }

  // デバッガーを入れて値を確認してみる
  debugger;
});

// データ送信ボタン
document.getElementById('sendBtn').addEventListener('click', () => {
  const data = {
    message: 'こんにちは！これはサンプルデータです。',
    timestamp: new Date().toISOString()
  };
  
  // vanillaJSでデータを送信する何かしらの実装を行なった。
  // 実装したコードを元に、JSを用いたデータを送信するコードの流れが説明できる。
  // Vanilla JS（Fetch API）でデータ送信
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // POSTリクエストを送信
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // オブジェクトをJSON文字列に変換して送信
  })
  .then(response => response.json()) // レスポンスをJSONで受け取る
  .then(result => {
    console.log('サーバーからのレスポンス:', result);
    alert('データ送信が成功しました！');
  })
  .catch(error => {
    console.error('エラーが発生しました:', error);
  });
});