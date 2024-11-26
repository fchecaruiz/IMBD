import { Movie } from "./Movie";
import { Imdb } from "./Imdb";
import { movie1 } from "./Movie";
import * as fs from 'fs'





console.log(movie1)
let peliculas = new Imdb ([movie1]);
let convertirAtexto = JSON.stringify(movie1);
console.log(convertirAtexto);
console.log();
console.log(typeof (JSON.stringify(movie1)))
console.log();
fs.writeFileSync("./archivoConvertido.json",convertirAtexto,"utf-8");


// cambio el nombre al archivo que me he equivocado
 const nombreActual = './archivoConvertido.json';
 const nuevoNombre = './imdbBBDD.json'; 
 fs.renameSync(nombreActual, nuevoNombre); 
 console.log('El archivo ha sido renombrado exitosamente.');

