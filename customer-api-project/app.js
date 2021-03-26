var express = require('express');
var path = require('path');
var fetch = require('node-fetch');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/customers', async function(req, res, next) {
    const url = "http://localhost:5000/customers";
    const response = await fetch(url);
    const data = await response.json();
    res.render('index', { customers: data });
  });

module.exports = app;
