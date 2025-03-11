
const fruits = ['りんご', 'ばなな', 'みかん', 'ぶどう'];

// forEachメソッドを用いた配列の反復処理を行った。
// 実装したコードを元に、forEachメソッドの使い方とその利便性を説明できる。
fruits.forEach((fruit, index) => {
  console.log(`フルーツ ${index + 1}：${fruit}`);

  // debuggerステートメントを使用して、コードのデバッグを行った。
  // 実装したコードを元に、debuggerの使い方とその効果を説明できる。
  // ここでデバッガが発動する！(処理が停止)
  debugger;

  // 他にも処理を追加できるよ
  const message = `${fruit} が選ばれました！`;
  console.log(message);
});