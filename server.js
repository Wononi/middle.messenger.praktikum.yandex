const express = require('express');

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/signup', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/home/1', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/profile', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/profile/user-data', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/profile/user-password', (req, res) => {
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
