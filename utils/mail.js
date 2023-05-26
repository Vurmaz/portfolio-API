const nodemailer = require("nodemailer")

async function mail(req) {
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'sadikvurmaz@gmail.com',
            pass:'slnryusjkfwgxdav'
        }
    })

    let options = {
        from:req.body.sender,
        to:'sadikvurmaz@gmail.com',
        subject:req.body.subject,
        text:req.body.text,
    }
    await transporter.sendMail(options)
}

module.exports = mail