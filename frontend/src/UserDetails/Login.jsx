import React, { useState } from "react";
import "./Login.css"; // Create this CSS file for styling
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;

        // Save tokens to session storage
        sessionStorage.setItem("access_token", accessToken);
        sessionStorage.setItem("refresh_token", refreshToken);

        // Redirect user to home page
        window.location.href = "/";
      } else {
        const errorResponse = await response.data;
        setError(errorResponse);
      }
    } catch (error) {
      setError("An error occurred! Please try again.");
    }
  };

  return (
    <div>
      <Link to="/">
        <h1 style={{ textAlign: "center" }}>REGISTER USER INTERFACE</h1>
      </Link>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={loginUser}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
