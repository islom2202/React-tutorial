import React, {Component} from "react";

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
      color: 'black'
    }
  }
  increment = () => {
     this.setState({counter: this.state.counter+=1},() => {
      if (this.state.counter == 0) {
        this.setState({ color: "black" })
      }
      if (this.state.counter > 0) {
        this.setState({ color: "green" })
      }
      if (this.state.counter < 0) {
        this.setState({ color: "red" })
      }
     });
  }
  decrement = () =>{
    this.setState({counter: this.state.counter-=1},() =>{
      if (this.state.counter == 0) {
        this.setState({ color: "black" })
      }
      if (this.state.counter > 0) {
        this.setState({ color: "green" })
      }
      if (this.state.counter < 0) {
        this.setState({ color: "red" })
      }
    })
  }
  render() {
   return (
     <div>
       <h1 style={{color: `${this.state.color}`}}>{this.state.counter}</h1>
       <button onClick={this.increment}>increment +</button>
       <button onClick={() =>this.decrement()}>decrement -</button>
     </div>
   )
  }
}
export default Counter;