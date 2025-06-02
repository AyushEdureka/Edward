const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    title:String,
    description:String,
    requirements:String,
    location:String
})

module.exports = mongoose.model('Job',JobSchema)