import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Badge from "react-bootstrap/Badge";

const savedJsonDataKey = "jsonBoxContent";

const defaultJsonContent = { insert: "valid", json: "here" };

function JsonBox() {
  const savedJsonDataString = localStorage.getItem(savedJsonDataKey);
  const savedJsonData = savedJsonDataString ? JSON.parse(savedJsonDataString) : null;
  const [jsonData, setJsonData] = useState(
    savedJsonData && savedJsonData.content !== ""
      ? savedJsonData
      : { content: prettifyJson(defaultJsonContent), valid: true }
  );

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
            color: "#dadada",
            fontSize: "15px",
          }}
          spellCheck={false}
          value={jsonData.content}
          onChange={(el) => {
            try {
              const jsonText = JSON.parse(el.target.value);
              const formattedJson = prettifyJson(jsonText);
              // @ts-ignore
              firebase!.analytics().logEvent("someone_formatted_json");
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

const prettifyJson = (jsonObject: object) => {
  return JSON.stringify(jsonObject, null, 4);
};
export default JsonBox;
