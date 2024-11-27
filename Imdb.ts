

import {Movie} from "./Movie";
import { movie1 } from "./Movie";
import { movie2 } from "./Movie";
import * as fs from 'fs';



export class Imdb {

    public peliculas: Movie[];


    constructor(peliculas: Movie[]) {
     this.peliculas = peliculas;
    
}

 public escribirEnFicheroJSON(movie3: string):void { 


   let conversionJason = JSON.stringify(this.peliculas);
   console.log("objeto convertido a string; ",conversionJason)
   console.log()
   console.log("guardamos el archivo json")
   fs.writeFileSync("./otroArchivo.json",conversionJason,"utf-8")
   console.log()   
}

public obtenerInstanciaMDB(nombreFichero:string){
    return movie3
}

 
}

let movie3 = new Movie("El valle de los caídos", 2020, "española", "terror"); 

let imdb = new Imdb([movie3]);
imdb.escribirEnFicheroJSON("./peliculas.json");
console.log();
console.log("Devuelve objeto de la Imbd");
console.log()
console.log( "Lecura del objeto literal")
let lecturaObjetoLiteral = fs.readFileSync("./otroArchivo.json","utf-8")
console.log(lecturaObjetoLiteral)
console.log();
console.log("conversion a objeto literal")
let nuevoObjconvertido = JSON.parse(lecturaObjetoLiteral)
console.log(nuevoObjconvertido);
console.log()