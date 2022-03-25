import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StudentsProvider from "store/provider";

ReactDOM.render(
  <React.StrictMode>
    <StudentsProvider>
      <App />
    </StudentsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
