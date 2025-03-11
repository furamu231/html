// 非同期処理(async、 await)とは何か？を説明できる。
// また、実際に実装を行った。

// try catch文を用いた何かしらの実装を行なった。
// 実装したコードを元に、try-catch文を用いたコードの流れを説明できる。

// async/await & try-catchを使った非同期関数
async function fetchData() {
    try {
      // APIからデータを取得（非同期）
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  
      // エラー処理: レスポンスが正常でない場合はエラーを投げる
      if (!response.ok) {
        throw new Error(`HTTPエラー！ステータス: ${response.status}`);
      }
  
      const data = await response.json(); // レスポンスをJSONで受け取る
  
      console.log('データ取得成功:', data);
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  
    } catch (error) {
      // エラーが発生した場合はここで処理
      console.error('エラーが発生しました:', error);
      document.getElementById('output').textContent = 'データ取得に失敗しました。';
    }
  }
  
  // ボタンクリックで関数呼び出し
  document.getElementById('fetchBtn').addEventListener('click', fetchData);