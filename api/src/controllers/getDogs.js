
const { API_KEY } = process.env
const url = 'https://api.thedogapi.com/v1/breeds/'
async function getDogs() {
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
        // const races = new Set()

        // data.forEach(dog => {
        //     if (dog.breed_group != undefined && dog.breed_group != '') {
        //         races.add(dog.breed_group)
        //     }
        // });
        return data
    } catch (error) {
        throw new Error(error.message);
    }
}
getDogs()

module.exports = getDogs
