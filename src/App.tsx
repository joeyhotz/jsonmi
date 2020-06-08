import React from "react";
import "./App.css";
import JsonBox from "./Components/JsonBox/JsonBox";

function App() {
  return (
    <div style={{ height: "100%", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>jsonify</h1>
      </div>
      <div
        style={{
          flex: "1",
          padding: "20px 20px 20px 20px",
        }}
      >
        <JsonBox />
      </div>
    </div>
  );
}

export default App;
