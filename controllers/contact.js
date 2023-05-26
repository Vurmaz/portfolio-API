
const { StatusCodes } = require("http-status-codes")
const mail = require('../utils/mail')

const sendEmail = (req, res) => {
    mail(req)
    res.status(StatusCodes.OK).json({ message : 'Mail sended' })
}


module.exports = { sendEmail }

