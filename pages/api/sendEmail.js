export default function (req, res) {

    require('dotenv').config()

    const data = req.body
    const keys = Object.keys(data)

    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        host: 'trilhatecnologia.com',
        port: 465,
        secure: true,
        auth: {
            user: 'washington.f@trilhatecnologia.com',
            pass: process.env.MAIL__PASS
        }
    })

    let mailOptions = {
        from: '"Website Total Seguranca" <washington.f@trilhatecnologia.com>', // sender address
        to: "vendas@trilhatecnologia.com",
        subject: "Lead Website Total Segurança",
        html: `<div>
            
            <h1>Lead do site </h1>

            ${keys.map((item, index) => (
            `<h2 key={index}>
                        ${item}:
                        <strong>
                            ${data[item]}
                        </strong>
                    </h2>
            <br/>`
        ))
            }
            
            </div>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.sendStatus(500);
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.status(200).json({ "message": `Email enviado com sucesso, ${info.messageId, info.response}` });
    });

}