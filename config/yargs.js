const argv = require( 'yargs' )
    .option('m', {
        alias: 'multiplicando',//bandera que le vamos a pasar
        demandOption: true,//Es obligatorio
        describe: 'Valor del multiplicando',
        type: 'number'//Tipo de valor
    })
    .option('l', {
      alias: 'listar',//bandera que le vamos a pasar
      demandOption: false,//No es obligatorio
      default: false,//Valor por defecto
      describe: 'Si la bandera es true aparece en pantalla la tabla de multiplicar',
      type: 'boolean'//Tipo de valor
    })
    .option('h', {
        alias: 'hasta',//bandera que le vamos a pasar
        demandOption: true,//Obligatorio
        describe: 'Hasta que número se realiza la multiplicación',
        type: 'numero'//Tipo de valor
      })
    .check((argv, options) => { 
        if ( isNaN( argv.m ) ) { //Si la bandera no es un número manda un error por la consola
          throw ( 'El valor pasado no es un número' )
        } else {
          return true //Si es un número hazlo
        }
    })
    .check((argv, options) => { 
        if ( isNaN( argv.h ) ) { //Si la bandera no es un número manda un error por la consola
          throw ( 'El valor pasado no es un número' )
        } else {
          return true //Si es un número hazlo
        }
    })
    .argv;

module.exports = {
    argv
}