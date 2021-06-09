const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/catalogo',mainController.catalogo);

module.exports = router;