const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      // useUnifiedTopology: true,
    });
    console.log('mongodb is connected..');
  } catch (err) {
    console.error(err.message);
    //EXIT PROCESS WITH FAILURE
    process.exit(1);
  }
};
module.exports = connectDB;
