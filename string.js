let nombre = "Thiago"
let apeliido = "Cordoba"

let estudiante = nombre.concat(" ", apeliido)
let estudainteMayus = estudiante.toUpperCase()
let estudainteMinus = estudiante.toLocaleLowerCase()
let long = estudiante.length
let primerLetra = estudiante.charAt(0)
let ultimaLetra = estudiante.slice(-1)
let estudainteSinEsp = estudiante.replace(/\s+/g, '')
let contieneNombre = estudiante.includes(nombre)
