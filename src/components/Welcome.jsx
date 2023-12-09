import React, {Component} from 'react'

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      message: "Welcome to HomePage",
    }
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscription",
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>SUBSCRIBE</button>
      </div>
    )
  }
}

export default Welcome;