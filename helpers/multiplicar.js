//Importamos el fs
const fs = require('fs' );

const multiplicar = async( multiplicando, listar, limite ) => {


    try {       
        //Primero limpiamos la consola
        console.clear();
        let salida          = '';//Creamos un string vacio en el que guardaremos la información

        for (let multiplicador = 1; multiplicador <= limite; multiplicador++) {
            salida += `${ multiplicando } x ${ multiplicador } = ${ multiplicando * multiplicador }\n`;    
            //Guardamos la tabla en la salida y al final de cada línea le pongo un salto
        }
        //Comprobamos que la salida muestre lo correcto
        if( listar === true ) { 
            console.log( '=================' );
            console.log( `   Tabla del ${ multiplicando }    ` );
            console.log( '=================' );
            console.log( salida ) 
        };
        //Aplicamos el filesystem, primero lo tenenos que importar
        (fs.writeFileSync( `./salida/tabla${ multiplicando }.txt`, salida ));    
        
        return ( multiplicando )
                
    } catch (error) {
        throw ( error )      
    }
    
}
//Exportamos la función, cuando tenemos en un objeto el mismo nombre en la key y el valor no hace falta poner los dos
module.exports = {
    //multiplicar : multiplicar
    multiplicar
}