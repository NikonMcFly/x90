import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
// import { BrowserRouter } from 'react-router-dom'
// import { hydrate } from 'react-dom'

import App from "./components/App";

import './scss/main.scss';




var app = document.getElementById('app');
ReactDOM.render(
      <App />
        ,
    app);
