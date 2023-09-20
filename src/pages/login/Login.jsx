import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {
    if (email === "okulistik@example.com" && password === "1234") {
      localStorage.setItem("loggedInUser", JSON.stringify(email));

      if (onLogin) {
        onLogin();     
      }

      navigate("/");
    } else {
      setError("Kullanıcı veya şifre hatalı");
    }

    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const handleKeyDown = (e) => {
    e.code === "Enter" && handleLogin();
  };

  return (
    <div className="login" onKeyDown={handleKeyDown}>
      <div className="loginWrapper">
        <h1>Okulistik Yönetici Girişi</h1>
        <input
          type="text"
          placeholder="Kullanıcı Adı (Email)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons">
          <div className="login-btn" onClick={handleLogin}>
            Giriş Yap
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
