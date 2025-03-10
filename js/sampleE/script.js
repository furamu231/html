// オブジェクトを用いたデータ管理の実装を行った。
// 実装したコードを元に、オブジェクトの定義と操作方法を説明できる。

// undefinedとnullの違いを理解し、それらを用いた実装を行った。
// 実装したコードを元に、undefinedとnullの違いとそれらの使用例を説明できる。

// ユーザー情報オブジェクトを作成
const user = {
  name: "たかはし",
  age: 28,
  email: null,      // 情報がまだない（意図的に空）
  address: undefined, // データが未定義（未設定）
};

// ボタンと出力場所を取得
const showUserBtn = document.getElementById('showUserBtn');
const output = document.getElementById('output');

showUserBtn.addEventListener('click', function() {
  // 出力先を初期化
  output.innerHTML = '';

  // ユーザー情報を順にチェックして表示
  for (let key in user) {
    const value = user[key];

    // undefinedとnullの違いを表示
    let message = '';

    if (value === undefined) {
      message = `${key} は undefined（まだ定義されていません）`;
    } else if (value === null) {
      message = `${key} は null（値が空ですが意図的です）`;
    } else {
      message = `${key} : ${value}`;
    }

    // 表示を追加
    const p = document.createElement('p');
    p.textContent = message;
    output.appendChild(p);

    // コンソールでも確認
    console.log(message);
  }
});