const { Dog } = require('../db')

const postDog = (req, res) => {
    const { image, name, weight, height, life_span } = req.body

    async function createDog() {
        const created = await Dog.create({
            image,
            name,
            weight,
            height,
            life_span

        })
        return created
    }

    createDog()
        .then(perro => {
            res.status(200).json(perro)
        })
        .catch((err) =>{
            res.status(400).json({error: err.message})
        })
}


module.exports = postDog