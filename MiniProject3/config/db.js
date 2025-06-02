//Connect to database: mongoose
const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDB = async ()=>{
    //task: setup the connection
   
    try{

        await mongoose.connect(process.env.MONGO_URI)

        console.log("MongoDB Connected")

    }catch(error){
          console.error(error.message)
          process.exit(1)
    }


}

module.exports = ConnectDB;


