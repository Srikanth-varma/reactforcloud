import React from 'react';
import './App.css';

function App() {
    const deployedAt = new Date().toLocaleString();

  return (
    // <div className="App">
    //   <h5 style={{ color: "red" }}>Hello, World! deployed by srikanth</h5>
    // </div>
     <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>deployed automatically with jenkins pipeline</h2>
      <h1 style={{ color: "#0078D7" }}>React App Deployment Test</h1>
      <p style={{ color: "red", fontSize: "20px" }}>
        Hello, World! — Deployed by <strong>Srikanth</strong>
      </p>
      <p style={{ color: "gray" }}>Deployed at: {deployedAt}</p>
    </div>
  );
}

export default App;