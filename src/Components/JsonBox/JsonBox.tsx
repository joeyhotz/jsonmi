import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Badge from "react-bootstrap/Badge";

const savedJsonDataKey = "jsonBoxContent";

function JsonBox() {
  console.log("loading");
  const savedJsonDataString = localStorage.getItem(savedJsonDataKey);
  const savedJsonData = savedJsonDataString ? JSON.parse(savedJsonDataString) : null;
  const [jsonData, setJsonData] = useState(savedJsonData ? savedJsonData : { content: "", valid: false });

  return (
    <>
      <div style={{ height: "100%", width: "100%", position: "relative", float: "left" }}>
        <Badge
          pill
          variant="warning"
          style={{ position: "absolute", right: "10px", top: "10px", height: "1rem", width: "1rem" }}
        >
          {jsonData.valid ? "" : " "}
        </Badge>
        <FormControl
          as="textarea"
          aria-label="With textarea"
          className="jsonbox"
          style={{
            width: "100%",
            height: "100%",
            resize: "none",
            border: "none",
            padding: "20px",
            backgroundColor: "inherit",
            color: "#e0e9f3",
          }}
          value={jsonData.content}
          onChange={(el) => {
            try {
              const jsonText = JSON.parse(el.target.value);
              const formattedJson = JSON.stringify(jsonText, null, 1);
              const jsonData = { content: formattedJson, valid: true };
              setJsonData(jsonData);
              localStorage.setItem(savedJsonDataKey, JSON.stringify(jsonData));
            } catch (e) {
              const jsonData = { content: el.target.value, valid: false };
              setJsonData(jsonData);
              localStorage.setItem(savedJsonDataKey, JSON.stringify(jsonData));
            }
          }}
        />
      </div>
    </>
  );
}
export default JsonBox;
