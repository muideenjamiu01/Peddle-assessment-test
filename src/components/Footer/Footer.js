import React, { Component } from 'react';
import "./Footer.css";
import "./Footer-Mediaquery.css"


class Footer extends React.Component{
  render() {
      return (
        <footer>
        <div className="footer">
          <div className="footer-content">
            <div className="logo-social">
                <div className="logo">PEDDLE</div>
              <div>
                <p>Praesent mollis lobortis nisl nec laoreet. Duis <br/> euismod nisl nec ante egestas ullamcorper. <br/> Duis id mauris consequat, ultrices ligula at, <br/>
                 laoreet mag.</p>
              </div>
                  <p className="foot-p">©2020PADDLE</p>
            </div>
            <div className="product">
              <ul>
                <li className="foot-head">Product</li>
                <li><a href>Praesent</a></li>
                <li><a href> Laoreet</a></li>
                <li><a href> Laoreet</a></li>
                <li><a href>Server</a></li>
              </ul>
            </div>
            <div className="engaged">
              <ul>
                <span><li className="foot-head">Engaged</li></span>
                <span><li><a href>Mauris</a></li></span>
                <span><li><a href>Aenean</a></li></span>
                <span><li><a href>Linsean</a></li></span>
                <span><li><a href>Lingula</a></li></span>
              </ul>
            </div>
            <div className="money">
              <ul>
                <li className="foot-head">Earn Money</li>
                <li><a href>Ultrices</a></li>
                <li><a href>Fusce</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      );
  }
}
export default Footer