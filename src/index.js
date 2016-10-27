import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import https from 'https';
import SubBar from './SubBar';
import MainBar from './MainBar';

ReactDOM.render(
  <SubBar/>,
  document.getElementById('subBar')
);

ReactDOM.render(
  <MainBar/>,
  document.getElementById('mainBar')
);

exports.index = function(req, res) {
    res.render('index', { https : https});
    //Now your EJS will have the module
}
