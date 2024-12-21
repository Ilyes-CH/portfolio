import React, { Component } from 'react'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      image: "",
    }
    //communicate the data from jwt token from backend and extract the data otherwise fallback to static data
  }
  render() {
    return (
      <div>
      
      </div>
    )
  }
}

