const express = require("express");
// chama a função express
const router = express.Router();

//criar rota e cadastrar
router.get("/", async(req, res) => {
    return res.json({
        error: false,
        menssage:"mensagem cadastrada com sucesso!"
    })
});


//exportar a instrução dentro da constante router
module.exports = router;