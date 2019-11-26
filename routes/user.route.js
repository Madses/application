const express = require('express');
const createUser = require('../controllers/user/createUser');
const getAuthenticatedUser = require('../controllers/user/getAuthenticatedUser');
const {check} = require('express-validator');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/' , [
    check('name' , 'Name is required').not().isEmpty(),
    check('email' , 'Please enter a valid e-mail').isEmail(),
    check('password' , 'Please enter a password with 8 or more characters').isLength({ min : 8})
] , createUser);

router.get('/' , auth, getAuthenticatedUser);

module.exports = router;