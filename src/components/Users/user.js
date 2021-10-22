import React, { Component } from 'react';
import "./user.css";
import "./query.css"

class User extends React.Component{
  render() {
      return (
        <div className="lasles-users">
        <div className="container user-container">
          <div className="users users-content">
            <div className="users-icon">
              <ion-icon name="person-outline" />
            </div>
            <div className="label">
              <div className="user-heading">90+</div>
              <div>Users</div>
            </div>
          </div>
          <div className="location users-content">
            <div className="users-icon">
              <ion-icon name="location-sharp" />
            </div>
            <div className="label">
              <div className="user-heading">30+</div>
              <div>Location</div>
            </div>
          </div>
          <div className="servers users-content">
            <div className="users-icon">
              <ion-icon name="server-sharp" />
            </div>
            <div className="label">
              <div className="user-heading">50+</div>
              <div>Servers</div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default User;