const { Temp } = require('../db')

const { API_KEY } = process.env
const url = 'https://api.thedogapi.com/v1/breeds/'
function getTemps(req, res) {
    async function getting() {
        try {

            const response = await fetch(url, {
                method: "GET",
                withCredentials: true,
                headers: {
                    "x-api-key": API_KEY,
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            let allTemps = ''
            data.forEach(dog => {
                if (dog.temperament != undefined && dog.temperament != '') {
                    allTemps = allTemps + (dog.temperament.split(','))
                }

            });
            const temps = new Set(allTemps.split(','))
            const arr = Array.from(temps)
            const getInfo = await Temp.findAll()
            console.log(arr);
            if (getInfo.length == 0) {
                for (let index = 0; index < arr.length; index++) {
                    const save = await Temp.create({
                        name: arr[index]
                    })
                }
                return await Temp.findAll()
            }

        } catch (error) {
            throw new Error(error.message);
        }
    }

    getting()
        .then(temp => {
            res.status(200).json(temp)
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        })
}

module.exports = getTemps