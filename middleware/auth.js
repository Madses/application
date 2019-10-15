const jwt = require('jsonwebtoken');
const {jwtConfig} = require('config');
const secret = jwtConfig.secret;

module.exports = function(req,res,next) {
    const token = req.header('x-auth-token');
    if(!token) res.status(401).json({msg : 'No token found, authorization denied'});

    try {
        const decoded = jwt.verify(token,secret);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({msg : 'Invalid token'});
    }
};

/*
get token from header
check if token is set
decode token
set user to decoded token
 */