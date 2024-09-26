import { useState } from "react";

function App() {
  return (
    <div className="form-container">
      <form>
        <label htmlFor="名前">名前</label>
        <input type="text" id="name" name="名前" />
        <label htmlFor="パスワード">パスワード</label>
        <input type="password" id="password" name="パスワード" />
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input type="email" id="email" name="メールアドレス" />
      </form>
    </div>
  );
}

export default App;
