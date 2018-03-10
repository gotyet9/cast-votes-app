import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import AppRoutes from './routes';
import history from './history';
import './styles/custom.css';

ReactDOM.render(
  <Router history={history}>
      <AppRoutes />
 </Router>,
  document.getElementById('app'),
);
if (module.hot) {
  module.hot.accept();
}