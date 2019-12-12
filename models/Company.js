const mongoose = require('mongoose');
const schema = mongoose.Schema;

const companySchema = new schema({
    name : { type : String,  required : true,},
    date : {type: Date, default: Date.now()}
});

const Company = mongoose.model('company' , companySchema);
module.exports = Company;