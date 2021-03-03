import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.sass';
 
const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <h1>{title}</h1>,
  document.getElementById('app')
);

module.hot.accept();