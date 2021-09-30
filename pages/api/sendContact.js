export default function SendContact(req, res) {
  require("dotenv").config();

  const data = req.body;

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
    subject: "Formulário de contato rápido",
    html: `<div>

              <h1>Formulário de contato</h1>

             <h2>nome: ${data.nome}</h2>
             <h2>Telefone: ${data.telefone}</h2>

              </div>`, // html body
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
