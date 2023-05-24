const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//server expres

const app=express();

//database
dbConnection();



//listen petition
app.listen(process.env.PORT,()=>{
    console.log(`Servidor ok ${process.env.PORT}`)
});


//directory public
app.use(express.static('public'));

//read and parse body
app.use(express.json());


//rutas
app.use('/api/auth',require('./routes/auth'));
app.use('/api/info',require('./routes/alumnos'));
app.use('/api/info',require('./routes/guardias'));
app.use('/api/info',require('./routes/visitas'));