// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style.css';  // Import du fichier CSS global

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
