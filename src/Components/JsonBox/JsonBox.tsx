import React, { useState } from "react";
const beautify = require("json-beautify");

function JsonBox() {
  const [json, setJson] = useState("");
  const [validJson, setValidJson] = useState(false);

  return (
    <textarea
      className="jsonbox"
      style={{
        width: "100%",
        height: "100%",
        marginTop: "0px",
        resize: "none",
        outline: validJson ? "" : "1px solid #f00",
        boxSizing: "border-box",
      }}
      value={json}
      onChange={(el) => {
        try {
          const jsonText = JSON.parse(el.target.value);
          setJson(JSON.stringify(jsonText, null, 1));
          setValidJson(true);
        } catch (e) {
          setJson(el.target.value);
          setValidJson(false);
        }
      }}
    />
  );
}
function IsJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export default JsonBox;
