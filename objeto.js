persona = {
    "nombre": "Thiago",
    "apellido": "Cordoba",
    "edad": 21,
    "altura": 1.83,
    "eresDesarrollador": true
}

edad = persona.edad
lista = [{...persona}]
lista.push(
    { "nombre": "Juan",
    "apellido": "Monetllano",
    "edad": 22,
    "altura": 1.78,
    "eresDesarrollador": false
    },
    {
    "nombre": "Damian",
    "apellido": "Fanchini",
    "edad": 25,
    "altura": 1.90,
    "eresDesarrollador": false}


) 

lista.sort((a,b)=>b.edad-a.edad)
