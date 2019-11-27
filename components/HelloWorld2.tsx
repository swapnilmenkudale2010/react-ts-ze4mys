import React, {Component} from "react";

export default class HelloWorld2 extends Component {
constructor(props) {
super(props);
this.state ={
  firstName :"Swapnil",
  lastName : "Menkudale",
  salary:  1000
};
this.increaseSalary=this.increaseSalary.bind(this);
 }

 private increaseSalary()
 {
   this.setState({
     
  firstName :"Swapnil",
  lastName : "Menkudale",
  salary: this.state.salary + 1000
})
 }
render() {
  return (
    <div>
    <div>{this.state.firstName}</div>
    <div>{this.state.lastName}</div>
    <div>{this.state.salary}</div>
    <button onClick={this.increaseSalary}>increase salary</button>
    </div>
  )
};
}