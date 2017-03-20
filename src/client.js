import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Application from './application';

(() => {
  ReactDOM.render(
    <Router>
      <Application />
    </Router>,
    document.getElementById('application')
  )
})()
