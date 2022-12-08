const express = require('express');
const Alien = require('../models/alien');
const router = express.Router();

//get all alien data 
router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (error) {
        res.json('message : Details not found in this fields');
    }

})

// geting alient by id
router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (error) {
        res.json('message : Details not found with this id');
    }

})

// posting the alien data to the database
router.post('/', async (req, res) => {
    const aliens = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await aliens.save();
        res.json(a1);
    } catch (error) {
        res.status(404).send({
            message: "something went wrong"
        });
    }
})

// updating the alien value by id
router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save();
        res.json(a1);

    } catch (error) {
        console.log('Error');
    }
})

// deleteting the alien by id
router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.remove();
        res.json(a1);

    } catch (error) {
        console.log('Error');
    }
})


module.exports = router;