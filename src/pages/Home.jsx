import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UrlInputForm from "../components/UrlInputForm";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleSummarise = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div style={styles.page}>   {}
      <Navbar />

      <main style={styles.main}> {}
        <div style={styles.container}>
          <h1>AI-Powered Video Summaries</h1>
          <p>Turn long YouTube videos into concise summaries in seconds.</p>
          <UrlInputForm onSubmit={handleSummarise} />
          {loading && <LoadingSpinner />}
        </div>
      </main>

      <Footer />   {}
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",        
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,                    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxWidth: "700px",
    textAlign: "center",
    background: "rgba(255,255,255,0.08)",
    padding: "40px",
    borderRadius: "16px",
  },
};

export default Home;
