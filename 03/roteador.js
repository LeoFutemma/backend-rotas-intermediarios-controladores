const { consultarImoveis, consultarImovelPorId } = require('./controladores/imoveis');

const express = require('express');
const router = express.Router();

router.get('/imoveis', consultarImoveis);
router.get('/imoveis/:id', consultarImovelPorId);

module.exports = router;