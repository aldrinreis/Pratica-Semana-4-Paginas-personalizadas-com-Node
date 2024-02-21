// emailService.js
const nodemailer = require("nodemailer");

async function enviarEmail(destinatario, assunto, corpo) {
  try {
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        // user: "ca7fd966b00c39",
        // pass: "3dab996008e1fd",
        user: "3507d377d7e596",
        pass: "d27297756bdf05"
      },
    });

    const message = {
      from: "noreply@a4ndev.com",
      to: destinatario,
      subject: assunto,
      text: corpo,
      html: corpo,
    };

    await transport.sendMail(message);
    return { erro: false, mensagem: "E-mail enviado com sucesso!" };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error.message);
    return { erro: true, mensagem: "Erro index.js: E-mail não enviado!" + error.message };
  }
}

module.exports = enviarEmail;
