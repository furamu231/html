// 名前付きエクスポートをインポート
import { greet, farewell } from './moduleA';

// デフォルトエクスポートをインポート
import add from './moduleA';

// 使用例
console.log(greet('たかはし'));   // Hello, たかはし!
console.log(farewell('たかはし')); // Goodbye, たかはし!
console.log(add(5, 3));           // 8