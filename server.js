const express = require('express');
const {nodeConfig} = require('config');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//connect to database
connectDb();

//application level middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/user' , routes.user);
app.use('/auth' , routes.auth);
app.use('/company' , routes.company);

// Start
const port = nodeConfig.port;
app.listen(port , () => {console.log(`listening on port ${port}`)});
