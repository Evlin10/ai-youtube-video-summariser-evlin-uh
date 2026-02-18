import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* ⭐ Stats Section */}
      <div style={styles.statsContainer}>
        <div style={styles.statBox}>
          <span style={styles.icon}>⭐</span>
          <h3 style={styles.statValue}>4.9</h3>
          <p style={styles.statLabel}>User Rating</p>
        </div>

        <div style={styles.statBox}>
          <span style={styles.icon}>👥</span>
          <h3 style={styles.statValue}>80,000+</h3>
          <p style={styles.statLabel}>Active Users</p>
        </div>

        <div style={styles.statBox}>
          <span style={styles.icon}>🏫</span>
          <h3 style={styles.statValue}>12,000+</h3>
          <p style={styles.statLabel}>Schools & Teams</p>
        </div>
      </div>

      {/* © Copyright */}
      <p style={styles.copy}>
        © {new Date().getFullYear()} AI YouTube Video Summariser. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "80px",
    padding: "40px 20px 20px",
    background: "rgba(0, 0, 0, 0.55)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
  },

  /* Stats section */
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },

  statBox: {
    textAlign: "center",
  },

  icon: {
    fontSize: "1.6rem",
  },

  statValue: {
    margin: "6px 0",
    fontSize: "1.6rem",
    fontWeight: "700",
  },

  statLabel: {
    fontSize: "0.85rem",
    opacity: 0.75,
  },

  copy: {
    fontSize: "0.75rem",
    opacity: 0.6,
  },
};

export default Footer;
