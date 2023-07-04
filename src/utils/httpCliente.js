//aqui debe contener la informacion con las credenciales para poder utilizar la informacion que me brinda la apliacion
//aqui estan las credenciales para poder entrar a la API
const API = "https://api.themoviedb.org/3"
//con get le pido info a la API (get es el nombre de una funcion)y como parametro le pasare el path o sea lo que va a completar el llamado de "https//api.themoviedb.or/3"
//la funcion me retornara la API y voy a concatenar el path
//luego configuro las credenciales para que llegue la info a la API y esta la pueda leer , entienda el pedido y lo devuelva

export const get = (path) =>{ // tengo una funcion get a la cual le paso como parametro un path
    //cuando se ejecute la funcion le hara un llamado a la API , API +path -> "https://api.themoviedb.or/3"+/discover/movie
    //luego al resultado de eso lo pasa a json y lo guardo en data ,entonces en :
    //data.reslts tendre la informacion que necesito de las peliculas
    return fetch (API + path, {
        headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njg5NGMzYmMxYjE4YmI3NjVmZmJhODZlNWEyNTI2MiIsInN1YiI6IjY0MmZhNTQ5NjcyMDNkMDEwM2QyYzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ck6GkSEmMo27os7hIIue6MSbNuYy5rd7C2-d7jrY3K4",
        "Content-Type": "application/json; charset=utf-8",
    }
    }).then((results)=> results.json())
    //cuando me devuelva la pelicula pedida la guardara en una variable results y
    // a esa variable la transformo en  un json
    //MIN 28 CLASE 15
}

//lo hago en 2 partes, guardo, convierto a jason y luego lo guardo en la variable data 