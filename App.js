"use strict"

//Declarar paquetes a usar
const express = require('express'),
      mongoose = require('mongoose'),
      indexRoutes = require('./routes/index'),
      path = require('path');
      
const app = express(),
      url = 'mongodb+srv://Seba1705:Seba1705@primerbase-qdsue.mongodb.net/miscosas';

// Coneccion a la base de datos
mongoose.connect( url, { useNewUrlParser: true } )
        .then( db => console.log( 'Base de datos conectada' ))
        .catch( err => console.log( err ))

// Configurar especificaciones del servidor
app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'ejs' );

// Permite hacer peticiones POST
app.use( express.urlencoded( { extended : false } ))

// Proporciona una ruta de inicio al servidor
app.use( '/', indexRoutes );

// Arrancamos el servidor http / express
app.listen(app.get('port'), () => {
    console.log( `Servidor corriendo en puerto ${ app.get('port') }` );
});
