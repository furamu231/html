// filterメソッドを用いた配列の要素フィルタリングを行った。
// 実装したコードを元に、filterメソッドの使い方とその利便性を説明できる。

// mapメソッドを用いた配列の要素変換を行った。
// 実装したコードを元に、mapメソッドの使い方とその利便性を説明できる。

// 学生の得点が格納された配列
const scores = [45, 72, 88, 53, 91, 67, 40, 76];

// 得点が60点以上の学生の得点を2倍にする
const updatedScores = scores
  .filter(score => score >= 60)  // 60点以上の学生だけをフィルタリング
  .map(score => score * 2);       // フィルタされた得点を2倍にする

console.log(updatedScores);
