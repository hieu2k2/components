import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class Addname extends react.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          name: "Nguyễn Quang Hiếu",
          age: 18,
          address: "Hà Tĩnh",
        },
      ],
    };
  }
  render() {
    return (
      <table boder="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>tên</td>
            <td>tuổi</td>
            <td>Địa chỉ</td>
          </tr>
        </thead>
        <tbody>
          {this.state.student.map((student, item) => {
            return (
              <tr key={item}>
                <td>{student.id}</td>
                <td>{student.ten}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
ReactDOM.render(<Addname />, document.getElementById("root"));
reportWebVitals();
