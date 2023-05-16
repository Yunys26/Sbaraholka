const router = require('express').Router();

const productsList = require('../templates/mock_main.ts')

module.exports = router
    .get('/catalogue', (req, res) => {
        res.send(productsList)
    })
