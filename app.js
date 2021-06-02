const express = require('express')
const router = require("./controller/index")
// const routerApi = require("./controllers/apis")
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));// ponerla porque si no no te deja usar json
app.use(express.json());

// app.use('/static', express.static(__dirname + '/public'));
// app.use('/api', routerApi)

app.use("/", router); //llama a las rutas para que funcionen

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});