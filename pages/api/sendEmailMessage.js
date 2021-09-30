export default function sendMailMessage(req, res) {
  require("dotenv").config();

  const data = req.body;
  const keys = Object.keys(data);

  console.log(keys);

  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL__HOST,
    port: process.env.MAIL__PORT,
    secure: process.env.MAIL__SECURITY,
    auth: {
      user: process.env.MAIL__USER,
      pass: process.env.MAIL__PASS,
    },
  });

  let mailOptions = {
    from: process.env.MAIL__SENT__FROM,
    to: process.env.MAIL__SEND__TO,
    subject: "Forulário de cotação",
    html: `<div>
            
            <h1>Lead do site </h1>

            ${keys.map(
              (item, index) =>
                `<h2 key={index}>
                        ${item}:
                        <strong>
                            ${data[item]}
                        </strong>
                    </h2>
            <br/>`
            )}
            
            </div>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.sendStatus(500);
      return console.log(error.message);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
    res.status(200).json({
      message: `Email enviado com sucesso, ${(info.messageId, info.response)}`,
    });
  });
}
