import React from "react";
class Button extends React.Component {
  render() {
    return (
      <div className={this.props.className} onClick={this.props.onClick}>
        {this.props.lable}
      </div>
    );
  }
}
export default Button;
