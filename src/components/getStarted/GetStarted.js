import React, { Component } from 'react';
import Developer from "../assets/web developer 1.png";
import "./GetStarted.css";
import "./query.css";


class About extends React.Component{
  render() {
      return (
        <div className="get-started"> 
        <div className="get-started_content">
          <h1>We Are Everything We<br/>
          Aspire To BE </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci <br/>
          condimentum lectus efficitur tempor vel eu massa. Sed molestie turpis <br/>
          eget ipsum malesuada dignissim</p>
          <span className="get-btn"><a href>Get Started</a></span>
        </div>
        <div className="get-started_img">
        <img src={Developer} alt="" className="start-img" />
        </div>
      </div>
      );
  }
}

export default About;