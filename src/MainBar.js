import React from 'react';
import './MainBar.css';

var MainBar = React.createClass({
  render() {
    return(
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid main-nav">
            <div className="navbar-header">
              <a className="navbar-left icon-nav" href="#"><img className="logo" role="presentation" src="images/logo.png"></img></a>
            </div>
            <div className="input-group navbar-left search-bar">
              <span className="input-group-btn">
                <button className="btn btn-default search-btn" type="button"><i className="glyphicon glyphicon-search"></i></button>
              </span>
              <input type="text" className="form-control search-form" placeholder="Search any Address, Neighborhood or Zip Code"></input>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a className="hvr-underline-from-center" href="#">Log In</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
});

export default MainBar;
