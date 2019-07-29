import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/style.css';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById('root')
);

console.log('asdf');
console.log(process.env.PUBLIC_URL);