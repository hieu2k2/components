import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
const Alert = (props) => {
  return (
    <div className="alert alert-warning" role="alert">
      {props.text}
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
