// ユーザー情報オブジェクト
const user = {
  name: "たかはし",
  age: 28,
};

// 関数を用いた処理の実装を行った。
// 実装したコードを元に、関数の定義とその利用方法を説明できる。

// 通常の関数（関数宣言）
function showUserInfoNormal() {
  const output = document.getElementById('output');
  output.innerHTML = `通常の関数で表示：名前: ${user.name}, 年齢: ${user.age}`;
}

// アロー関数を用いた実装を行った。
// 実装したコードを元に、アロー関数の定義と従来の関数表現との違いを説明できる。

// アロー関数（関数式）
const showUserInfoArrow = () => {
  const output = document.getElementById('output');
  output.innerHTML = `アロー関数で表示：名前: ${user.name}, 年齢: ${user.age}`;
};

// ボタンのクリックイベント
const showInfoBtn = document.getElementById('showInfoBtn');
showInfoBtn.addEventListener('click', function() {
  // 通常の関数を呼び出す
  showUserInfoNormal();

  // 1秒後にアロー関数を呼び出す（setTimeoutで非同期的に）
  setTimeout(showUserInfoArrow, 1000);
});