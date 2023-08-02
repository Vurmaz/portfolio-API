const express = require('express')
const router = express.Router()
const upload = require('../utils/multer')
const Skill = require('../models/skill')
const fs = require('fs')
const path = require('path')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors/index')

const { getSkills, createSkill, deleteSkill } = require('../controllers/skill')

router.route('/').get(getSkills)

router.route('/create').post(createSkill)

router.route('/:id').delete(deleteSkill)

module.exports = router