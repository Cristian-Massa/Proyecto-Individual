const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
require('dotenv').config()
const getDogs = require('../controllers/getDogs');
const getDogById = require('../controllers/getDogById');
const getDogByQuery = require('../controllers/getDogByQuery')
const postDog = require('../controllers/createDog');
const getTemps = require('../controllers/getTemps');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', async (req, res) =>{
    const response = await getDogs()
    console.log(response)
    try {
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
})

router.post('/dogs', postDog)

router.get('/temperaments', getTemps)

router.get('/dogs/:id', async (req, res) =>{
    const {id} = req.params
    const response = await getDogById(id)
    try {
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


// Ejemplo para luego http://localhost:3001/dog/name?race=Toy
router.get('/dog/name', async (req, res) =>{
    const {name} = req.query
    const response = await getDogByQuery(name)
    try {
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;
