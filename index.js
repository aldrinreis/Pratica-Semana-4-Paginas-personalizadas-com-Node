// app.js
const express = require("express");
const authService = require("./authService");
const enviarEmail = require("./emailService");
const porta = 443;

const app = express();

app.use(express.static(__dirname));

app.use("/", authService);


app.post("/sendemail", async (req, res) => {
  const resultado = await enviarEmail(
    "aldrinreisdemorais@gmail.com",
    "Teste MailAPI",
    "Olá. \n \n Você solicitou a alteração de senha."
  );

  if (resultado.erro) {
    return res.status(400).json(resultado);
  } else {
    return res.json(resultado);
  }
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
