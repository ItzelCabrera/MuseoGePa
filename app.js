require('dotenv').config(); //to load env  variables from a .env file
const express = require('express');
const layout = require('express-ejs-layouts')
//const router = require('./routes/front_route'); // importar las rutas
const { DB_connection } = require('./config/dbconfig') 
/*const session = require('express-session')
const flash = require('connect-flash') //area de sesión para almacenar mensajes en flash memory y se limpien depsues de mostrar al usuario
const MongoStore = require('connect-mongo') //parte de la aplicación que requiere conexión con Mongo*/

const app = express();

const port = process.env.PORT || 800

DB_connection();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

/*app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: MongoStore.create({
      mongoUrl: process.env.CONNECTION_STRING,
      touchAfter: 24 * 3600 // time period in seconds
    })
}))*/

app.use(express.static('public'))//express.static middleware maneja el servicio de archivos; express debe servir cualquier static file que pida el cliente del directorio public
app.use(layout)
app.set('layout','layouts/layout') //integrar el frontend layout file
app.set('view engine', 'ejs') //view engine que se usará
app.use('/', require('./routes/front_route'));

app.listen(port, () => console.log(`Server is running on port ${port}`))