export default function (req, res) {
  require("dotenv").config();

  const data = req.body;

  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "trilhatecnologia.com", //process env
    port: 465,
    secure: true,
    auth: {
      user: "washington.f@trilhatecnologia.com",
      pass: process.env.MAIL__PASS,
    },
  });

  let mailOptions = {
    from: '"Website Total Seguranca" <washington.f@trilhatecnologia.com>', // sender address
    to: "vendas@trilhatecnologia.com",
    subject: "Elias Viadão",
    html: `<div>

              <h1>Formulário de contato</h1>

             <h2>nome: ${data.nome}</h2>
             <h2>profissão: ${data.profissão}</h2>

              </div>`, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.sendStatus(500);
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
    res.status(200).json({
      message: `Email enviado com sucesso, ${(info.messageId, info.response)}`,
    });
  });
}
