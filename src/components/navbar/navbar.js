import React, { Component } from 'react';
import "./navBar.css"
import "./query.css"

class Navbar extends React.Component{
  render() {
      return (
         
        <nav>
        <a href="#" className="logo">PEDDLE</a>
        <ul className="menu">
          <li classname="item"><a href="#">About</a></li>
          <li classname="item"><a href="#">FAQS</a></li>
          <li classname="item"><a href="#">Pricing</a></li>
          <li classname="item"><a href="#">Testimonials</a></li>
          <li className="buttons"><a href="#" >Sign In</a></li>
          <li className="button"><a href="#" >Sign Up</a></li>
        </ul>
        <div>
            
            
        </div>
      </nav>

       
      );
  }
}
export default Navbar;