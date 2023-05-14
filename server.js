const express = require('express');

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const allowedCors = [
    'http://localhost:3000',
    'https://localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = (req, res, next) => {
    const { method } = req;
    const { origin } = req.headers;
    const requestHeaders = req.headers['access-control-request-headers'];

    res.header('Access-Control-Allow-Credentials', true);

    if (allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }

    if (method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
        res.header('Access-Control-Allow-Headers', requestHeaders);
        res.end();
    }
    next();
};

app.use(express.static('./dist'));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/signup', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/messenger', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/profile', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/settings', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/profile/password', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/404', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/500', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
