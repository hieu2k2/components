import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Welcome(props) {
  return <h1>Hello: {props.name}</h1>;
}
ReactDOM.render(<Welcome name="hiếu" />, document.getElementById("root"));
reportWebVitals();
