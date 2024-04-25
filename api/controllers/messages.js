const express = require("express");
// chama a função express
const router = express.Router();

//criar rota e cadastrar
router.post("/", async(req, res) => {

//receber os dados do corpo da requisição
 var data = req.body;

    return res.json({
        error: false,
        menssage:"mensagem cadastrada com sucesso!",
        data
    });
});


//exportar a instrução dentro da constante router
module.exports = router;