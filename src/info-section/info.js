import './info.css'
import React, { Component } from 'react';
import ReactBodyMovin from 'react-bodymovin';
import markus2 from './animation.json';

class Info extends Component {

  render() {
    var svgContainer = document.getElementById('svgContainer');
    const bodyMovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData:  markus2
  };
    return (
      <div className="info-section">
        <div className="tracking">
          <div className="text">
            <h2>Impact tracks the emissions from your travel,
              food, and products used.</h2>
          </div>
            <div className="animation" id="svgContainer">
            <ReactBodyMovin options={bodyMovinOptions}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Info
