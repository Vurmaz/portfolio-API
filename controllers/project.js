const Project = require('../models/project')
const { StatusCodes } = require('http-status-codes')


const getProjects = async(req, res) => {
    const projects = await Project.find({})
    res.status(StatusCodes.OK).json({ projects })
}

const createProject = async(req, res) => {
    const project = await Project.create(req.body)
    if(!project) {
        throw new BadRequestError('Project cannot created')
    }
    res.status(StatusCodes.CREATED).json({ project })
}

const deleteProject = async(req, res) => {
    const project = await Project.findOneAndDelete({ _id : req.params.id })
    if(!project) {
        throw new BadRequestError('Project cannot found')
    }
    res.status(StatusCodes.OK).json({ message:'Project has been deleted' })
}



module.exports = { getProjects, createProject, deleteProject }