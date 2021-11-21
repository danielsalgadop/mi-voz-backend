const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 3000;

var contactRouter = require('./routes/contactRoutes')

app.use('/contacts/', contactRouter);

app.listen(port, () => {
    console.log('listening');
})