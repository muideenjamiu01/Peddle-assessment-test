import React, { Component } from 'react';
import "./Plan.css";
import "./Plan-Mediaquery.css"
import Pricing1 from "../assets/pricing1.png";
import Pricing2 from "../assets/pricing2.png";
import Pricing3 from "../assets/pricing3.png";

class Plan extends React.Component{
  render() {
      return (
        <div className="container_2 ">
        <div className="section plan" id="plan">
          <div className="plan-heading">
            <h2>Choose Your Plan</h2>
            <p>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
          </div>
          <div className="plan_container">
            <div className="plan-box">
              <img src={Pricing1} alt="" className="plan-img" />
              <h4>Free Plan</h4>
              <div className="plan-list">
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
              </div>
              <h5 className="get_down1">Free</h5>
              <div className="btn-plan">Select</div>
            </div>
            <div className="plan-box">
              <img src={ Pricing2} alt="" className="plan-img" />
              <h4>Standard Plan</h4>
              <div className="plan-list">
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
              </div>
              <h5 className="get_down">$9 / mo</h5>
              <div className="btn-plan">Select</div>
            </div>
            <div className="plan-box">
              <img src={ Pricing3} alt="" className="plan-img" />
              <h4>Premium Plan</h4>
              <div className="plan-list">
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
                <div>
                  <ion-icon name="checkmark-outline" className="checkmark-outline" />
                  <span>Mauris sem neque</span>
                </div>
              </div>
              <h5>$12 / mo</h5>
              <div className="btn-plan-last">Select</div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
export default Plan