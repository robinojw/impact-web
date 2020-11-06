import './title.css'
import React, { Component } from 'react'

export default class Title extends Component {
  constructor(props) {
    super(props)
    this.titleRef = React.createRef()
    this.descRef = React.createRef()
  }

  animate() {
    const titleRef = this.titleRef.current
    const descRef = this.descRef.current

    setTimeout(function () {
      titleRef.style.opacity = '1'
      titleRef.style.marginTop = '0'
      descRef.style.opacity = '1'
      descRef.style.marginTop = '0'
    }, 50)
  }

  componentDidMount() {
    // this.animate()
  }

  render() {
    return (
      <div className="title" id="title">
        <h2 ref={this.titleRef} className="page-title">
          The first app to accuratley track your impact on our planet
        </h2>
      </div>
    )
  }
}
