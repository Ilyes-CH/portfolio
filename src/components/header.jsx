import React, { Component } from 'react'

export default class header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.changeName = this.changeName.bind(this)
  }
  changeName() {
    this.setState({ name: "ilymar" })
  }
  render() {
    return (
      <div>update name
        <p>{this.state.name}</p>
        <button onClick={this.changeName}>change</button>
      </div>
    )
  }
}

