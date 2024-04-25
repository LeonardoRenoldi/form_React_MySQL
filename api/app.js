// incluir as bibliotecas .
// gerenciar as requisições, rotas, URL's entre outras funçoes.

const express = require("express");
//chamar a função express
const app = express();

//incluir controllers
const messages = require("./controllers/messages.js");

//criar rotas
app.use('/message', messages)

app.listen(8080, () => {
    console.log("Servidor iniciado 1 na porta 8080: http://localhost:8080");
});

