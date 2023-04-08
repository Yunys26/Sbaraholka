const router = require('express').Router();

const productsList = require('../templates/mock.json')

module.exports = router
    .get('/catalogue', (req, res) => {
        res.send(productsList)
    })
