const { Dog } = require('../db')
const { API_KEY } = process.env
const { where, Op } = require('sequelize')
const url = "https://api.thedogapi.com/v1/breeds"
async function getDogByQuery (name) {
    try {
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
            const getDogBD = await Dog.findAll()
            const allData = {data, getDogBD}
            return allData
        }
            const getDogBD = await Dog.findAll(
                {
                    where: {
                        name: name
                    }
                }
            )

        const filtered = data.filter(objeto => objeto.name === name)
        const allData = {filtered, getDogBD};
        return allData;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = getDogByQuery