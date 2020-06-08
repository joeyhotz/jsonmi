import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";

function JsonBox() {
  const [json, setJson] = useState("");
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
            setJson(JSON.stringify(jsonText, null, 1));
            setValidJson(true);
          } catch (e) {
            setJson(el.target.value);
            setValidJson(false);
          }
        }}
      />
    </>
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
