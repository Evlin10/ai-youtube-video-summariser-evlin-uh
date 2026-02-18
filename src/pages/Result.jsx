import React from "react";
import Navbar from "../components/Navbar";
import SummaryDisplay from "../components/SummaryDisplay";
import TimestampList from "../components/TimestampList";
import Footer from "../components/Footer";

const Result = () => {
  return (
    <div style={styles.page}>
      <Navbar />

      <main style={styles.main}>
        <div style={styles.container}>
          <SummaryDisplay summary="This is a generated summary placeholder." />

          <TimestampList
            timestamps={[
              { time: "01:20", text: "Intro", url: "#" },
              { time: "05:45", text: "Main Idea", url: "#" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",      // ✅ Full page height
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,                // ✅ Pushes footer to bottom
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxWidth: "700px",
    width: "100%",
    margin: "60px auto",
    background: "rgba(255,255,255,0.08)",
    padding: "40px",
    borderRadius: "16px",
  },
};

export default Result;
