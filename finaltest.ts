import { clearScreenDown } from "readline";
import { actor, Professional } from "./Professional";
import * as readlineSync from 'readline-sync';
import * as fs from 'fs';
import { Movie, movie1, movie2 } from "./Movie";





let name = readlineSync.question('Ingresa el nombre del profesional: ');
let age = readlineSync.questionInt('Ingresa la edad del profesional: ');
let weight = readlineSync.questionFloat('Ingresa el peso del profesional: ');
let height = readlineSync.questionFloat('Ingresa la altura del profesional: ');
let isRetired = readlineSync.keyInYN('¿Esta jubilado? : ');
let nationality = readlineSync.question('Ingresa la nacionalidad del profesional: ');
let oscarsNumber = readlineSync.questionInt('Ingresa el numero de Oscars del profesional: ');
let profession = readlineSync.question('Ingrese la profesion del profesional: ');


let nuevoProfesional= new Professional(name, age, weight, height, isRetired, nationality, oscarsNumber,profession);
console.log(nuevoProfesional);
console.log();

// lectura de datos del archivo json
let leerFichero = fs.readFileSync("imdbBBDD.json","utf-8");
console.log("lectura de fichero: " , leerFichero);
console.log();
let convertirFicheroJava = JSON.parse(leerFichero);
console.log(convertirFicheroJava);
console.log();

convertirFicheroJava.nuevoRegistro.push(nuevoProfesional);
console.log();


console.log();
let strinjson = JSON.stringify(convertirFicheroJava);
console.log();
let guardarArchivo = fs.writeFileSync("imdbBBDD.json", strinjson, "utf-8");
console.log(guardarArchivo);
console.log()





