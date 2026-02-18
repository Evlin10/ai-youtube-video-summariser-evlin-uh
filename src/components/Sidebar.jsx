import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div style={styles.overlay} onClick={onClose}></div>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3 style={styles.title}>AI YouTube</h3>

        <nav style={styles.menu}>
          <Link to="/" style={styles.item}>📄 YouTube Summarizer</Link>
          <Link to="/history" style={styles.item}>🕒 Search History</Link>
          <div style={styles.item}>📝 My Notes</div>
          <div style={styles.item}>🎬 YouTube Transcript</div>
          <div style={styles.item}>💬 YouTube Subtitle</div>
          <div style={styles.item}>⚙️ More</div>
        </nav>
      </div>
    </>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    zIndex: 99
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "260px",
    height: "100vh",
    background: "#0b1f2a",
    padding: "20px",
    zIndex: 100,
    boxShadow: "2px 0 20px rgba(0,0,0,0.4)"
  },
  title: {
    marginBottom: "24px",
    fontSize: "1.2rem"
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  item: {
    padding: "12px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.05)",
    cursor: "pointer",
    color: "white"
  }
};

export default Sidebar;
