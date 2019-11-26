const {validationResult} = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtConfig} = require('config');

const secret = jwtConfig.secret;


//creates an user
module.exports = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors : errors.array()});
    
    const {name , email , password} = req.body;

    try {
        let user = await User.findOne({email});
        if(user) return res.status(400).json({errors : [{ msg: 'User already exists'}]});

        user = new User({ name, email});
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {user : {id : user.id}};

        jwt.sign(payload,secret,{expiresIn:36000}, (err, token) =>{
            if(err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }

};


/*
check als gebruiker bestaat
encrypt wachtwoord
return return jwt voor de front-end
 */