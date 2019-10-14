const express = require('express');
const {nodeConfig} = require('config');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

//application level middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/user' , routes.user);


// Start
const port = nodeConfig.port;
app.listen(port , () => {console.log(`listening on port ${port}`)});
