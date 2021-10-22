import React, { Component } from 'react';
import "./Peddle.css";
import "./Peddle-Mediaquery.css"
import Netflix from "../assets/netflix.png";
import Reddit from "../assets/reddit.png";
import Amazon from "../assets/amazon.png";
import Discord from "../assets/discord.png";
import Spotify from "../assets/spotify.png";

class Peddle extends React.Component{
  render() {
      return (
           
      <div className="container_2  peddle">
      <div className="peddle-heading">
        <h2>Get Started With <br/> Paddle Today</h2>
        <span>Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante <br/> egestas ullamcorper</span>
        
      </div>
      <div>
        <span className="peddle-btn"> <a href>Get Started</a></span>
      </div>
      
      <div className="logos">
        <span><img src={Netflix} alt="netflix-logo" className="netflix" /></span>
        <span><img src={Reddit} alt="reddit-logo" /></span>
        <span><img src={Amazon} alt="amazon-logo" className="amazon" /></span>
        <span><img src={Discord} alt="discord-logo" /></span>
        <span><img src={Spotify} alt="spotify-logo" /></span>
      </div>
    </div>
      );
  }
}
export default Peddle