const {validationResult} = require('express-validator');
const Company = require('../../models/Company');
const jwt = require('jsonwebtoken');
const {jwtConfig} = require('config');

const secret = jwtConfig.secret;


//creates a company
module.exports = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors : errors.array()});
    
    const {name} = req.body;

    try {
        let company = new Company({name});
        await company.save();
        res.json({msg:'Company has been created'});

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }

};
