const nodemailer = require("nodemailer")

async function mail(req) {
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'sadikvurmaz@gmail.com',
            pass:process.env.MAILER
        }
    })    
    let options = {
        from:req.body.data.email,
        to:'sadikvurmaz@gmail.com',
        subject:req.body.data.name,
        text:`${req.body.data.email}  ${req.body.data.message}`,
    }    
    await transporter.sendMail(options)
}

module.exports = mail