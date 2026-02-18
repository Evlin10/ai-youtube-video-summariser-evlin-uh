import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  const [forgotMode, setForgotMode] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login logic will be implemented with backend.");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert("Password reset link will be sent to the email.");
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>
            {forgotMode ? "Reset Password" : "Login"}
          </h2>

          {!forgotMode ? (
            <form onSubmit={handleLogin} style={styles.form}>
              <input
                type="email"
                placeholder="Email address"
                required
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                required
                style={styles.input}
              />

              <button type="submit" style={styles.button}>
                Login
              </button>

              <p style={styles.linkText}>
                <span onClick={() => setForgotMode(true)} style={styles.link}>
                  Forgot password?
                </span>
              </p>
            </form>
          ) : (
            <form onSubmit={handleForgotPassword} style={styles.form}>
              <input
                type="email"
                placeholder="Enter your registered email"
                required
                style={styles.input}
              />

              <button type="submit" style={styles.button}>
                Send Reset Link
              </button>

              <p style={styles.linkText}>
                <span onClick={() => setForgotMode(false)} style={styles.link}>
                  Back to login
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "1.8rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "1rem",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg, #00f5a0, #00d9f5)",
    fontWeight: "600",
    cursor: "pointer",
  },

  linkText: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "0.9rem",
  },

  link: {
    color: "#00d9f5",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;
