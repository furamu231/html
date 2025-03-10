// 関数に引数を渡す実装を行った。
// 実装したコードを元に、引数の役割とその使用方法を説明できる。

// 関数からの戻り値を利用した実装を行った。
// 実装したコードを元に、戻り値の意味とその使い方を説明できる。

// 2つの引数を受け取って加算を行い、結果を返す関数
function add(a, b) {
    return a + b;
  }
  
  // 2つの引数を受け取って減算を行い、結果を返す関数
  function subtract(a, b) {
    return a - b;
  }
  
  // 2つの引数を受け取って乗算を行い、結果を返す関数
  function multiply(a, b) {
    return a * b;
  }
  
  // ボタンをクリックしたときに計算を実行
  document.getElementById('calculateBtn').addEventListener('click', function() {
    // 入力された値を取得
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // 計算結果を計算関数に渡して取得
    const additionResult = add(num1, num2);
    const subtractionResult = subtract(num1, num2);
    const multiplicationResult = multiply(num1, num2);
  
    // 結果を表示
    const result = document.getElementById('result');
    result.innerHTML = `
      <p>加算: ${additionResult}</p>
      <p>減算: ${subtractionResult}</p>
      <p>乗算: ${multiplicationResult}</p>
    `;
  });