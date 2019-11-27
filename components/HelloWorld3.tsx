import React, {PureComponent} from "react";

export default class HelloWorld3 extends PureComponent {
constructor(props) {
super(props);
this.state ={
  firstName :"Swapnil",
  lastName : "Menkudale",
  salary:  1000,
  words : ["😜","😜"]

};
this.increaseSalary=this.increaseSalary.bind(this);
 }

 private increaseSalary()
 {
//    const words1=this.state.words;
//    words1.push("!!!");
//    this.setState({
//    words: words1
// })
   const words =this.state.words.concat(['!!!']);
   this.setState({
   words: words
})
 }
render() {
  return (
    <div>
    <div>{this.state.firstName}</div>
    <div>{this.state.lastName}</div>
     <div>{this.state.words}</div>
    <button onClick={this.increaseSalary}>increase salary</button>
    </div>
  )
};
}