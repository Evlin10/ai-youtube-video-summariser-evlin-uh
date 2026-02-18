import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2>Search History</h2>

        {history.length === 0 ? (
          <p>No previous summaries found.</p>
        ) : (
          <ul style={styles.list}>
            {history.map((item, index) => (
              <li key={index} style={styles.card}>
                <p><strong>URL:</strong> {item.url}</p>
                <p><strong>Summary:</strong> {item.summary.slice(0, 120)}...</p>
                <p style={styles.date}>{item.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "60px auto",
    padding: "20px",
    color: "white"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "16px"
  },
  date: {
    fontSize: "0.8rem",
    opacity: 0.7
  }
};

export default History;
