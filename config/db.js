const mongoose = require('mongoose');
const {mongoConfig} = require('config');

const mongoUri = mongoConfig.uri;

const connectDb = async () => {
   try {
      await mongoose.connect(mongoUri, { useNewUrlParser: true  , useUnifiedTopology: true , useCreateIndex: true});
      console.log('Connected to mongo ...')
   } catch(err) {
      console.error(err.message);
   }
};

module.exports = connectDb;