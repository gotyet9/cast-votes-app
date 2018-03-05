import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <h1>Polling is all your's now.</h1>,
  document.getElementById('app'),
);
if (module.hot) {
  module.hot.accept();
}