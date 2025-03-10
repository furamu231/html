const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', function() {
  let keepGoing = true;
  
  // while文を用いたループ処理の実装を行った。
  // 実装したコードを元に、while文の使い方とその動作を説明できる。
  while (keepGoing) {
    // ユーザーに入力を促す
    let input = prompt("数字を入力してください（0で終了）");

    // 入力がnull（キャンセル）ならループを抜ける
    if (input === null) {
      alert("キャンセルされました。終了します！");
      break;
    }

    // 文字列から数字に変換
    let number = parseInt(input);

    // switch文を用いた条件分岐の実装を行った。
    // 実装したコードを元に、switch文の使い方とif文との違いを説明できる。

    // switch文で条件分岐
    switch (number) {
      case 1:
        alert("1が入力されました！");
        break;
      case 2:
        alert("2が入力されました！");
        break;
      case 3:
        alert("3が入力されました！");
        break;
      case 0:
        alert("終了します！");
        keepGoing = false; // whileループを終了させる
        break;
      default:
        alert("その他の数字が入力されました！");
        break;
    }
  }
});