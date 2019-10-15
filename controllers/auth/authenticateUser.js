const {validationResult} = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtConfig} = require('config');

const secret = jwtConfig.secret;

module.exports = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors : errors.array()});
    const {email , password} = req.body;

    try {
        let user = await User.findOne({email});
        if(!user) return res.status(400).json({errors : [{ msg: 'Invalid credentials'}]});
        const payload = {user : {id : user.id}};

        const comparePass = await bcrypt.compare(password, user.password);
        if(!comparePass) return res.status(400).json({errors : [{ msg: 'Invalid credentials'}]});

        jwt.sign(payload,secret,{expiresIn:36000}, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }

};