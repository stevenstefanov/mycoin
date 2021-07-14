import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    if (email && password) {
      const response = await axios.post("/api/users", {
        name,
        email,
        password,
      });
      if (response) {
        console.log("okay");
        sessionStorage.setItem("isLoggedIn", true);
        document.location.replace("/home");
      }
    }
  };

  return (
    <section className="sign-up-form">
      <div className="input-group mb-3 sign-up-content">
        <div className="card-body">
          <h5 className="sign-up-title">Sign Up</h5>
          <form onSubmit={signUp}>
            <div className="input-group mb-3 sign-up">
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="form-control"
                placeholder="Full Name"
                aria-label=" name"
                id="name-signup"
              />
            </div>
            <div className="input-group mb-3 sign-up">
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

            <div className="input-group mb-3 sign-up">
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

            <button type="submit" className="btn btn-outline-light btn-lg">
              Submit
            </button>
          </form>{" "}
        </div>
      </div>
    </section>
  );
}

export default SignUp;
