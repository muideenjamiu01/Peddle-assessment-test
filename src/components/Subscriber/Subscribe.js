import React, { Component } from 'react';
import "./Subscribe.css";
import "./Subscribe-Mediaquery.css"


class Subscribe extends React.Component{
  render() {
      return (
        <div className="container_2">
            <div className="subscriber" id="subscriber">
            <div className="sub-left">
              <h2>Subscribe Now for <br /> Get Special Features!</h2>
              <span>Let's subscribe with us and find the fun.</span>
            </div>
            <div className="btn-subscribe"><a href>Subscribe Now</a></div>
          </div>
        </div>
        

      );
  }
}
export default Subscribe;
