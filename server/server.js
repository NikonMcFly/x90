import express from "express";

import path from "path";
import bodyParser from "body-parser";
import { renderToString } from "react-dom/server";
import ReactDOMServer from 'react-dom/server';
const nodemailer = require('nodemailer');
// import App from './client/components/App';

const app = express();


// app.use( express.static(path.join(__dirname, 'dist')));
app.use(express.static('dist'));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.get('*.css', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// const corsm = (req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
//  res.header("Access-Control-Allow-Headers", "Content-Type");
//  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//  next();
//     next();
// };

// app.get('*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
//
// app.post('/contact', corsm, (req, res) => {
//
// })

var request = require("request");




const port = process.env.PORT || 8080;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);

// export default app;
