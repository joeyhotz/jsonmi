import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register({
  onUpdate: (registration) => {
    registration.unregister().then(() => {
      window.location.reload();
    });
  },
  onSuccess: (registration) => {
    console.info("service worker on success state");
    console.log(registration);
  },
});
