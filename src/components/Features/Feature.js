import React, { Component } from 'react';
import "./Feature.css";
import "./Feature-mediaquery.css"
import Featureimg from "../assets/feature-img.png";

class Feature extends React.Component{
  render() {
      return (
        <div className="features">
          <div className="features-img">
            <img src={Featureimg} alt="features-image" />
          </div>
          <div className="features-content">
            <h2>Features We Provide <br/> For You</h2>
            <p>Curabitur tempor justo non turpis malesuada cursus.<br/> Mauris ac libero eu sem finibus lacinia nec pulvinar.</p>
            <div className="features-list">
              <div className="feature-item">
              <div className="checkmark"></div>
                <span>Curabitur tempor justo</span>
              </div>
              <div className="feature-item">
              <div className="checkmark"></div>
                <span>Curabitur tempor justo.</span>
              </div>
              <div className="feature-item">
              <div className="checkmark"></div>
                <span>Curabitur tempor justo</span>
              </div>
              <div className="feature-item">
                <div className="checkmark"></div>
                <span>Curabitur tempor justo</span>
              </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Feature;