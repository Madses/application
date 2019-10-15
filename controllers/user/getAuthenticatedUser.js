const User = require('../../models/User');

const getAuthenticatedUser = async function (req,res) {
    const id = req.user.id;
    try{
        const user = await User.findById(id).select('-password');
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = getAuthenticatedUser;