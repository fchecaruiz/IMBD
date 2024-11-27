import { Movie } from "./Movie";
import { Imdb } from "./Imdb";
import { movie1 } from "./Movie";
import { movie2 } from "./Movie";
import * as fs from 'fs' 

import { writeFileSync } from "fs";
import { readFileSync } from "fs";import { clearScreenDown } from "readline";



console.log(movie1)
let peliculas = new Imdb ([movie1]);
let convertirAtexto = JSON.stringify(movie1);
console.log(convertirAtexto);
console.log();
console.log(typeof (JSON.stringify(movie1)))
console.log();
fs.writeFileSync("./archivoConvertido.json",convertirAtexto,"utf-8");


// cambio el nombre al archivo que me he equivocado
 let nombreActual = './archivoConvertido.json';
 let nuevoNombre = './imdbBBDD.json'; 
 fs.renameSync(nombreActual, nuevoNombre); 
 console.log('El archivo ha sido renombrado de forma correcta.');



//punto 4

let verObjetoJson = readFileSync('./imdbBBDD.json', 'utf-8')
console.log("este es la lectura del  Objeto con readFileSync")
console.log(verObjetoJson)
console.log()

console.log("Este es la conversion del la funcion JASON.parse")
let conversion = JSON.parse(verObjetoJson);
console.log(conversion)
console.log()
// almacenar en una instancia de la clase Imdb
console.log("resultado de alamcenar en la instancia de la clase Imdb")
let almacenar = new Imdb ([movie1])
console.log(almacenar)


