compra =["pan","leche","azucar","fideos","agua"]
compra.push("Aceite de girasol")
compra.pop()
peliculas = [
    {"titulo": "Pirtas del caribe", 
    "director": "Espen Sandberg",
    "fecha": new Date ("2003-05-17") 
    },

    {"titulo": "El efecto mariposa", 
    "director": "Eric Bress",
    "fecha": new Date ("2004-06-24") 
    },

    {"titulo": "El lobo de Wall Street", 
    "director": "Martin Scorsese",
    "fecha": new Date ("2014-01-02") 
    },
]

peli_desp_2010=peliculas.filter(peli=> peli.fecha>new Date('2010-01-01'))
directores_peli=peliculas.map(peli=>peli.director)
titulos_peli=peliculas.map(peli=>peli.titulo)
directores_titulo_peli=directores_peli.concat(titulos_peli)
directores_titulo_peli_propagacion= [...directores_peli,...titulos_peli]




