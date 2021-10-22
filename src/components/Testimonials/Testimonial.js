import React, { Component } from 'react';
import "./Testimonial.css";
import "./Testimonial-Mediaquery.css"
import Robert from "../assets/robert.png";
import Kim from "../assets/kim.png";
import Yessica from "../assets/yessica.png";

class Testimonial extends React.Component{
  render() {
      return (
        <div className="container_2  testimonial">
        <div className="peddle-heading">
          <h2>Trusted by Thousands of <br /> Happy Customer</h2>
          <span>Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et <br/> suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies. </span>
        </div>
        {/* bootsrap carousel */}
        <div id="demo" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousels">
                <div className="testimonial-carousel caro-active">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Robert} className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Viezh Robert</h4>
                        <span>Warsaw, Polandt</span>
                      </div>
                    </div>
                    <div className="head-right ">
                      <span>4.5</span>
                      <ion-icon name="star" className="star"/>
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                  </div>
                </div>
                <div className="testimonial-carousel">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Kim} className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Kim Young Jou</h4>
                        <span>Seoul, South Korea</span>
                      </div>
                    </div>
                    <div className="head-right">
                      <span>4.5</span>
                      <ion-icon name="star" className="star" />
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                  </div>
                </div>
                <div className="testimonial-carousel">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Kim} className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Kim Young Jou</h4>
                        <span>Seoul, South Korea</span>
                      </div>
                    </div>
                    <div className="head-right">
                      <span>4.5</span>
                      <ion-icon name="star" className="star" />
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousels">
                <div className="testimonial-carousel">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Yessica} alt="yessica-img" className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Yessica Christyt</h4>
                        <span>Shanxi, China</span>
                      </div>
                    </div>
                    <div className="head-right">
                      <span>4.5</span>
                      <ion-icon name="star" className="star" />
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“I like it because I like to travel far and still can connect with high speed.”..</p>
                  </div>
                </div>
                <div className="testimonial-carousel">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Kim} className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Kim Young Jou</h4>
                        <span>Seoul, South Korea</span>
                      </div>
                    </div>
                    <div className="head-right">
                      <span>4.5</span>
                      <ion-icon name="star" className="star" />
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                  </div>
                </div>
                <div className="testimonial-carousel">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Kim} className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Kim Young Jou</h4>
                        <span>Seoul, South Korea</span>
                      </div>
                    </div>
                    <div className="head-right">
                      <span>4.5</span>
                      <ion-icon name="star" className="star" />
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousels">
                <div className="testimonial-carousel">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Kim} className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Kim Young Jou</h4>
                        <span>Seoul, South Korea</span>
                      </div>
                    </div>
                    <div className="head-right">
                      <span>4.5</span>
                      <ion-icon name="star" className="star" />
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                  </div>
                </div>
                <div className="testimonial-carousel">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Kim} className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Kim Young Jou</h4>
                        <span>Seoul, South Korea</span>
                      </div>
                    </div>
                    <div className="head-right">
                      <span>4.5</span>
                      <ion-icon name="star" className="star" />
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                  </div>
                </div>
                <div className="testimonial-carousel">
                  <div className="carousel-head">
                    <div className="head-left">
                      <div className="carousel-img">
                        <img src={Kim} className="profile-pic" />
                      </div>
                      <div className="profile-title">
                        <h4>Kim Young Jou</h4>
                        <span>Seoul, South Korea</span>
                      </div>
                    </div>
                    <div className="head-right">
                      <span>4.5</span>
                      <ion-icon name="star" className="star" />
                    </div>
                  </div>
                  <div className="carousel-body">
                    <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left and right controls */}
          <div className="carousel-navigation">
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              {/* <span class="carousel-control-prev-icon"></span> */}
              <div className="backward-carbtn">
                <ion-icon name="arrow-back-outline" />
              </div>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              {/* <span class="carousel-control-next-icon"></span> */}
              <div className="forward-carbtn">
                <ion-icon name="arrow-forward-outline" />
              </div>
            </a>
          </div>
        </div>
      </div>
      );
  }
}
export default Testimonial