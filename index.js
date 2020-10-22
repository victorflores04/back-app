const express = require('express');
require('dotenv').config();
//console.log(process.env)

//Servidor de express
const app = express();

//directorio publico
app.use(express.static('public'))

//lectura y parseo
app.use(express.json());

//Rutas
//TODO:auth //crear, login, renew
app.use('/api/auth', require('./routes/auth'));

//Listen de peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`servidor en servicio ${process.env.PORT}`);
});
