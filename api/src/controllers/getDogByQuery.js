const { Dog } = require('../db')
const { API_KEY } = process.env

const url = "https://api.thedogapi.com/v1/breeds"
async function getDogByQuery (name) {
    try {
        const getDogBD = await Dog.findAll(
            {
                where: {
                    name: name
                }
            }
        )
        const response =  await fetch(`${url}?${name}=`,{
            method: "GET",
            withCredentials: true,
            headers: {
                "x-api-key": API_KEY,
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        if(!name){
            return data
        }
        const filter = data.filter(objeto => objeto.name === name)
        return filter
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = getDogByQuery