const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String
    },
    github:{
        type:String
    },
    url:{
        type:String
    },
    gif:{
        type:String
    },
    desc:{
        type:String
    }
}) 

module.exports = mongoose.model('Project', ProjectSchema)