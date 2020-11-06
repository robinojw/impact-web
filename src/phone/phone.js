import './phone.css'
import React, { Component } from 'react'
import phone from '../assets/mockup.png'

class Phone extends Component {
  render() {
    return (
      <div id="phone" className="phone">
        <img alt="iPhone Mockup" src={phone} />
      </div>
    )
  }
}

export default Phone
