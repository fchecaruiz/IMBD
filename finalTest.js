"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Professional_1 = require("./Professional");
var readlineSync = require("readline-sync");
var fs = require("fs");
var name = readlineSync.question('Ingresa el nombre del profesional: ');
var age = readlineSync.questionInt('Ingresa la edad del profesional: ');
var weight = readlineSync.questionFloat('Ingresa el peso del profesional: ');
var height = readlineSync.questionFloat('Ingresa la altura del profesional: ');
var isRetired = readlineSync.keyInYN('¿Esta jubilado? : ');
var nationality = readlineSync.question('Ingresa la nacionalidad del profesional: ');
var oscarsNumber = readlineSync.questionInt('Ingresa el numero de Oscars del profesional: ');
var profession = readlineSync.question('Ingrese la profesion del profesional: ');
var nuevoProfesional = new Professional_1.Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession);
console.log(nuevoProfesional);
console.log();
// lectura de datos del archivo json
var leerFichero = fs.readFileSync("imdbBBDD.json", "utf-8");
console.log("lectura de fichero: ", leerFichero);
console.log();
var convertirFicheroJava = JSON.parse(leerFichero);
console.log(convertirFicheroJava);
console.log();
convertirFicheroJava.nuevoRegistro.push(nuevoProfesional);
console.log();
console.log();
var strinjson = JSON.stringify(convertirFicheroJava);
console.log();
var guardarArchivo = fs.writeFileSync("imdbBBDD.json", strinjson, "utf-8");
console.log(guardarArchivo);
console.log();
