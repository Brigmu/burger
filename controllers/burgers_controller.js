const burger = require("../models/burgers.js");
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) =>{
        res.render('index', {burgers: data})
    });
});

router.post('/api/burgers', (req, res) => {
    console.log(req.body);
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) =>{
        console.log('Added burger');
        res.json({ id: result.insertId });
    });
});

router.put('/api/burger/:id', (req, res) => {
    burger.updateOne('devoured', 'id', parseInt(req.params.id), (result) => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

module.exports = router;
