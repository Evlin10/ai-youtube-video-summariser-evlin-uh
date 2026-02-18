import React, { useState } from "react";

const UrlInputForm = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  const [hover, setHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Paste YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={styles.input}
      />

      <button
        type="submit"
        style={{
          ...styles.button,
          ...(hover ? styles.buttonHover : {})
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Generate Summary
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none"
  },
  button: {
    marginTop: "10px",
    padding: "14px",
    fontSize: "1rem",
    width: "80%",               
    alignSelf: "center",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #00f5a0, #00d9f5)",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",  
  },
  buttonHover: {
    transform: "translateY(-2px)",                 
    boxShadow: "0 10px 25px rgba(0, 245, 160, 0.4)" 
  }
};

export default UrlInputForm;
