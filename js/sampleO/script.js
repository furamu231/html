// popメソッドを用いた配列の要素削除を行った。
// 実装したコードを元に、popメソッドの使い方とその効果を説明できる。
const fruits = ['りんご', 'みかん', 'バナナ'];
const removed = fruits.pop();

console.log(removed); // バナナ（削除された要素）
console.log(fruits);  // ['りんご', 'みかん']

// pushメソッドを用いた配列の要素追加を行った。
// 実装したコードを元に、pushメソッドの使い方とその効果を説明できる。
const fruits2 = ['りんご', 'みかん'];
const newLength = fruits.push('バナナ');

console.log(newLength); // 3（配列の長さ）
console.log(fruits);    // ['りんご', 'みかん', 'バナナ']