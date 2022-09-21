import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current!.focus();
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current!.value;
    const password = passwordRef.current!.value;
    console.log("Username: "+ username + " Password: " + password);
  };
  return (
    <div className="App">
      <h3>LOGIN</h3>
      <div className="form">
        <form onSubmit={submitHandler} className="login-form">
          <input placeholder="Username" type="text" ref={usernameRef} />
          <input placeholder="Password" type="password" ref={passwordRef} />
          <div className="suffix">
            <div className="remember-me">
              <input id="rememberMe" type="checkbox" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="/#" className="forgot">Forgot?</a>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default App;
