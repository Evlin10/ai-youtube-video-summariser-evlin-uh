import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme === "light" ? "light" : "";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light" : "";
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <nav style={styles.nav}>
        <div style={styles.left}>
          <button style={styles.menuBtn} onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <span style={styles.brand}>🧠 AI YouTube Summariser</span>
        </div>

        <div style={styles.right}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          <button onClick={toggleTheme} style={styles.toggle}>
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)"
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  brand: {
    fontWeight: 700
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  },
  menuBtn: {
    fontSize: "1.4rem",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "white"
  },
  toggle: {
    fontSize: "1.2rem",
    background: "transparent",
    border: "none",
    cursor: "pointer"
  }
};

export default Navbar;
