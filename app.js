const express = require('express');
const app = express();

const sendRoute = require('./api/routes/send')

app.use('/send', sendRoute);

module.exports = app;