const films = require('../utils/films')
const routes = {
    home: (req, res) => {
        res.status(200).render('home')
    },
    film: async(req, res) => {
        let title = req.params.title
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}&apikey=3265fadd
        `)
        console.log (`http://www.omdbapi.com/?t=${title}&apikey=c2c71329`)
        res.status(200).send(data)
    },
    post: async(req, res) => {
        let title = req.body.title
        res.status(200).redirect(`film/${title}`);
    }
}
module.exports = routes
