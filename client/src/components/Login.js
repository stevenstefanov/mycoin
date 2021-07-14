import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();

    if (email && password) {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });

      if (response) {
        console.log(response);
        console.log("logged in");
        sessionStorage.setItem("isLoggedIn", true);
        document.location.replace("/portfolio");
      } else {
        console.log("login failed");
      }
    }
  };

  return (
    <section className="login">
      <div className="input-group mb-3">
        <div className="card-body">
          <h5 className="login-title">Sign In</h5>
          <form className="login-form" onSubmit={login}>
            <div className="input-group mb-3 sign-in">
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="input-group mb-3 sign-in">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="btn btn-outline-light btn-lg">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
