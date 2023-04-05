const router = require('express').Router();

const test = require('./js.json')

module.exports = router
    // TODO: URL для примера
    .get('/stands', (req, res) => {
        res.send(test)
    })
