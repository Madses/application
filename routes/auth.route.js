const express = require('express');
const authenticateUser = require('../controllers/auth/authenticateUser');
const {check} = require('express-validator');
const router = express.Router();

router.post('/' , [
    check('email' , 'Please enter a valid e-mail').isEmail(),
    check('password' , 'Password is required').exists(),
] , authenticateUser);

module.exports = router;