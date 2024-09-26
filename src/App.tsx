import { useState } from "react";

function App() {
  return (
    <div className="form-container">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </form>
    </div>
  );
}

export default App;
