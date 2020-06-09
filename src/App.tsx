import React from "react";
import "./App.css";
import JsonBox from "./Components/JsonBox/JsonBox";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { IoIosHelpCircle } from "react-icons/io";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

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
        paddingTop: "20px",
        fontFamily: '"Source Sans Pro", sans-serif',
      }}
    >
      <div
        style={{
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        <OverlayTrigger placement="left" delay={{ show: 100, hide: 100 }} overlay={renderTooltip}>
          <div style={{ position: "absolute", top: 30, right: 30 }}>
            <IoIosHelpCircle></IoIosHelpCircle>
          </div>
        </OverlayTrigger>

        <h1 style={{ fontWeight: 600 }}>jsonmi</h1>
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
function renderTooltip(props: any) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Hi stranger!
      <br /> Thanks for using jsonmi.
      <br /> <br />
      To format your JSON:
      <br />
      <b>1.</b> Paste some valid JSON into the box
      <br />
      <b>2.</b> $$$
    </Tooltip>
  );
}

export default App;
