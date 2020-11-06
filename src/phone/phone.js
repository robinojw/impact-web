import './phone.css'
import React, { Component } from 'react'
import ReactBodyMovin from 'react-bodymovin';
import phone from '../assets/mockup.png'
import animation from '../info-section/animation.json';


class Phone extends Component {
  render() {
    var svgContainer = document.getElementById('phone-animation');
    const bodyMovinOptions = {
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad: false,
      },
      prerender: true,
      animationData:  animation
    };

    return (
      <div id="phone" className="phone">
        <img alt="iPhone Mockup" src={phone} />
        <div className="iphone-ani" id="phone-animation">
          <ReactBodyMovin options={bodyMovinOptions}/>
        </div>
      </div>
    )
  }
}

export default Phone
