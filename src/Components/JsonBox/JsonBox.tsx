import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";

const jsonBoxContentItemKey = "jsonBoxContent";

function JsonBox() {
  const savedJsonContent = localStorage.getItem(jsonBoxContentItemKey);
  const [json, setJson] = useState(savedJsonContent || "");
  const [validJson, setValidJson] = useState(false);

  return (
    <>
      <FormControl
        as="textarea"
        aria-label="With textarea"
        className="jsonbox"
        style={{
          width: "100%",
          height: "100%",
          marginTop: "0px",
          resize: "none",
          border: validJson ? "" : "1px solid #ffbf00",
          boxSizing: "border-box",
        }}
        value={json}
        onChange={(el) => {
          try {
            const jsonText = JSON.parse(el.target.value);
            const formattedJson = JSON.stringify(jsonText, null, 1);
            setJson(formattedJson);
            setValidJson(true);
            localStorage.setItem(jsonBoxContentItemKey, formattedJson);
          } catch (e) {
            setJson(el.target.value);
            setValidJson(false);
            localStorage.setItem(jsonBoxContentItemKey, el.target.value);
          }
        }}
      />
    </>
  );
}
export default JsonBox;
