// ユーザーを表すクラス
class User {
    // コンストラクタで名前と年齢を受け取る
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // メソッド: ユーザー情報を表示
    showUserInfo() {
      return `名前: ${this.name}, 年齢: ${this.age}`;
    }
  
    // メソッド: ユーザーの年齢を1年加算
    growOlder() {
      this.age += 1;
    }
  }
  
  // ボタンのクリックイベント
  document.getElementById('createUserBtn').addEventListener('click', function() {

    // クラスからインスタンスを生成する実装を行った。
    // 実装したコードを元に、インスタンスの概念とその生成方法を説明できる。
    // インスタンスの生成（Userクラスから新しいユーザーオブジェクトを作成）
    const user1 = new User("たかはし", 28);
  
    // オブジェクトのメソッドを利用した実装を行った。
    // 実装したコードを元に、メソッドの定義とその利用方法を説明できる。
    
    // メソッドを使ってユーザー情報を表示
    const userInfo = user1.showUserInfo();
  
    // ユーザー情報を画面に表示
    document.getElementById('userOutput').innerHTML = `
      <p>${userInfo}</p>
    `;
  
    // メソッドで年齢を1年加算
    user1.growOlder();
  
    // 更新されたユーザー情報を表示
    document.getElementById('userOutput').innerHTML += `
      <p>1年後: ${user1.showUserInfo()}</p>
    `;
  });