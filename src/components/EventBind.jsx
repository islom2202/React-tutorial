import React, { Component } from 'react'

 class EventBind extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: 'Hello!'
    }
    this.messageHandler = this.messageHandler
  }
  messageHandler = () =>{
    this.setState({ message: 'GoodBye!' })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.messageHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind