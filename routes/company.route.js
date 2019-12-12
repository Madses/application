const express = require('express');
const createCompany = require('../controllers/company/createCompany');
const {check} = require('express-validator');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/' , [
    check('name' , 'Name is required').not().isEmpty(),
] ,auth,createCompany);



module.exports = router;