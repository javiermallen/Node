//Importamos la función multiplicar
const { multiplicar } = require( './helpers/multiplicar' );
const { argv } = require( './config/yargs' )


multiplicar( argv.m, argv.l, argv.h )
    .then( valor => console.log( `El archivo con la tabla del ${ valor } se ha creado` ) )
    .catch( err => console.log( err ) ) 