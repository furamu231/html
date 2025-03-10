// letとconstを用いた変数宣言を行った。
// 実装したコードを元に、letとconstの使い方や違い、varを使ってはいけない理由を説明できる。

// const → 再代入しない値（HTML要素を取得）
const title = document.getElementById('title');
const button = document.getElementById('btn');

// let → 値が変わるもの（状態を管理）
let isBlue = false;

// if文を用いた条件分岐の実装を行った。
// 実装したコードを元に、if文の使い方とその効果を説明できる。
// ボタンをクリックしたら色を切り替え
button.addEventListener('click', function() {
  if (isBlue) {
    title.style.color = 'black';
  } else {
    title.style.color = 'blue';
  }

  // 状態を反転（true / false 切り替え）
  isBlue = !isBlue;
});