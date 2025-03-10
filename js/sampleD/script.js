// 配列を用いたデータ管理の実装を行った。
// 実装したコードを元に、配列の定義と操作方法を説明できる。

// 配列を作成
const fruits = ["りんご", "バナナ", "ぶどう", "みかん", "パイナップル"];

// ボタンとリストの要素を取得
const showFruitsBtn = document.getElementById('showFruitsBtn');
const fruitList = document.getElementById('fruitList');

showFruitsBtn.addEventListener('click', function() {
  // まずはリストを空にする（ボタンを何度押してもリストが増えすぎないように）
  fruitList.innerHTML = '';

  // for文を用いたループ処理の実装を行った。
  // 実装したコードを元に、for文の使い方とその動作を説明できる。

  // for文で配列をループ
  for (let i = 0; i < fruits.length; i++) {
    // 現在のフルーツを取得
    const fruit = fruits[i];

    // liタグを作成して追加
    const li = document.createElement('li');
    li.textContent = fruit;

    // ulにliを追加
    fruitList.appendChild(li);

    // デバッグ用にコンソールにも出力
    console.log(`追加したフルーツ: ${fruit}`);
  }
});