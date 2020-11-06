import './header.css'
import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="nav">
          <h2 className="nav-title">Impact</h2>
          <ul>
            <a href="#how">
              <li>How it works</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#launch">
              <li>Launch</li>
            </a>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
