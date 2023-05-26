const Skill = require('../models/skill')
const { StatusCodes } = require('http-status-codes')

const getSkills = async(req, res) => {
    const skills = await Skill.find({})
    res.status(StatusCodes.OK).json({ skills })
}

const deleteSkill = async(req, res) => {
    const id = req.params.id
    const skill = await Skill.findOneAndDelete({ _id:id })
    if(!skill){
        throw new BadRequestError('Skill cannot found')
    }    
    res.status(StatusCodes.OK).json({ skill })
}


module.exports =  { getSkills, deleteSkill }