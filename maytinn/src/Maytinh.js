import React from "react";
import Button from "./Button";
import Input from "./input";
class Maytinh export React.Component{
 contructor(){
     super();
     this.state = {firstNumber : 0 , secondNumber : 0 , operator : null , displayValue : ''}
 };
 maytinh = (operator)=>{
     switch(operator){
             case "+" :
             this.setState({displayValue : parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber)}); break;
             case "-" :
             this.setState({displayValue : parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber)}); break;
             case "*" :
             this.setState({displayValue : parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber)}); break;
             case "/" :
             this.setState({displayValue : parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber)}); break;
             default: this.setState({displayValue:"erro input"});break;
     }
 }
  render(){
      return(
          <div className="maytinh container pt-4">
              <input type="number" onChange={(e) => {this.setState({firstNumber: e.target.value})}}/>
                <br></br>
                <input type="number" onChange={(e) => {this.setState({secondNumber: e.target.value})}}/>
                <h3>
                    ketqua : {this.state.displayValue}
                </h3>
                <Button className="btn btn-info mx-3" onClick={(e)=>{this.maytinh("+")}} lable = '+'></Button>
                <Button className="btn btn-info mx-3" onClick={(e)=>{this.maytinh("-")}} lable = '-'></Button>
                <Button className="btn btn-info mx-3" onClick={(e)=>{this.maytinh("*")}} lable = '*'></Button>
                <Button className="btn btn-info mx-3" onClick={(e)=>{this.maytinh("/")}} lable = '/'></Button>
          </div>
  );
  }
}
export default Maytinh ;