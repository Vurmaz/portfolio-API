const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    name:{
        type:String,        
    },
    image:{
        data:Buffer,       
        contentType:String
    },
    category:{
        type:String,
        enum:['Back-end', 'Front-end', 'Miscellaneous']
    }
})

module.exports = mongoose.model('Skill', SkillSchema)
