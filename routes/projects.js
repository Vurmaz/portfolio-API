const express = require('express')
const router = express.Router()

const { getProjects, createProject, deleteProject } = require('../controllers/project')


router.route('/').get(getProjects)
router.route('/create').post(createProject)
router.route('/id').delete(deleteProject)

module.exports = router
