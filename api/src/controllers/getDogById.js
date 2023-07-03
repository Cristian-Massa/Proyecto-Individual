const { API_KEY } = process.env
const { where, Op } = require('sequelize')
const { Dog } = require('../db')
const url = "https://api.thedogapi.com/v1/breeds/"
async function getDogById (id) {
    try {
        const getDogBD = await Dog.findAll(
            {
                where: {
                    id: id
                }
            }
        )
        const response =  await fetch(url + id,{
            method: "GET",
            withCredentials: true,
            headers: {
                "x-api-key": API_KEY,
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        const allData = {getDogBD, data}
        return allData
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = getDogById