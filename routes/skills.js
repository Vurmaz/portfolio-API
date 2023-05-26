const express = require('express')
const router = express.Router()
const upload = require('../utils/multer')
const Skill = require('../models/skill')
const fs = require('fs')
const path = require('path')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors/index')

const { getSkills, deleteSkill } = require('../controllers/skill')

router.route('/').get(getSkills)

router.post('/create', upload.single('skill'), async function(req, res, next) {
    const createObject = {
        name:req.body.name,
        image:{
            data: fs.readFileSync(path.join(__dirname, '.' ,  '../uploads/' , req.file.filename)),
            contentType: 'image/png'
        }
    }
    const newSkill = await Skill.create(createObject)

    if(!newSkill) {
        throw new BadRequestError('Skill cannot created')
    }
    res.status(StatusCodes.CREATED).json({ newSkill })
})

router.route('/:id').delete(deleteSkill)

module.exports = router