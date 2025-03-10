// exportとexport defaultを用いたモジュールのエクスポートを行った。
// 実装したコードを元に、exportとexport defaultの違いとそれぞれの使用例を説明できる。

// 通常のエクスポート（名前付きエクスポート）
export const greet = (name) => `Hello, ${name}!`;

export const farewell = (name) => `Goodbye, ${name}!`;

// デフォルトエクスポート
export default function add(a, b) {
  return a + b;
}
