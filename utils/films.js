const fetch = require ('node-fetch')

const film = {

getPelicula: async (url) =>{

let response = await fetch(url)
let data = await response.json()
return data

},
postPelicula: async(url) => {
    let response = await fetch(url)
    let film = await response.json()
    return film
},
putPelicula: async(url) => {
    let response = await fetch(url)
    let film = await response.json()
    return film
},
deletePelicula: async(url) => {
    let response = await fetch(url)
    let film = await response.json()
    return film
}

}


module.exports = film



