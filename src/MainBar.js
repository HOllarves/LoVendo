import React from 'react';
import './MainBar.css';

var MainBar = React.createClass({
  render() {
    return(
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-left icon-nav" href="#"><img className ="logo" src="images/logo.png"></img></a>
          </div>
          <ul className="nav navbar-nav ddown">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">City <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">City 1</a></li>
                <li><a href="#">City 2</a></li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

export default MainBar;
