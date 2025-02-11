import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
	<BrowserRouter basename='/portfolioV2'>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
