import React from "react";
import "./App.css";
import JsonBox from "./Components/JsonBox/JsonBox";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        height: "100%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "5%",
        marginRight: "5%",
        borderLeft: "1px solid black",
        borderRight: "1px solid black",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid black",
          paddingBottom: "20px",
        }}
      >
        <h1>jsonmi</h1>
      </div>
      <div
        style={{
          flex: "1",
        }}
      >
        <JsonBox />
      </div>
    </div>
  );
}

export default App;
