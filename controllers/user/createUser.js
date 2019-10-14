const {validationResult} = require('express-validator');
const User = require('../../models/User');

module.exports = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) res.status(400).json({errors : errors.array()});

    const {email , password} = req.body;

    try {
        let user = await User.findOne(email);
    } catch (err) {}

};


/*
check als gebruiker bestaat
encrypt wachtwoord
return return jwt voor de front-end
 */