const router = require('express').Router();

const productsList = require('../templates/mock_main.json')

module.exports = router
    .get('/catalogue', (req, res) => {
        res.send(productsList)
    })
