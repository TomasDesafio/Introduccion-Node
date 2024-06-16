
const registrar = (nombre, edad, animal, color, enfermedad) => {
    const fs = require('fs')
    const contenidoExistente = fs.readFileSync('citas.json', 'utf8');
    contenidoExistente=JSON.parse(contenidoExistente)

    const datos = [
    { Nombre: nombre },
    { Edad: edad },
    { Animal: animal},
    { Color: color},
    { Enfermedad: enfermedad}
    ]
    const datos2=JSON.stringify(datos)


    const contenidoactual= [...contenidoExistente,datos2];


    fs.writeFileSync('citas.json', JSON.stringify(contenidoactual) )
    }
const leer = (nombre) => {
    const fs = require('fs')
    const datos = fs.readFileSync('citas.json', 'utf8')
    const datos2=JSON.parse(datos)
    console.log(datos2)
    }
module.exports = { registrar, leer }