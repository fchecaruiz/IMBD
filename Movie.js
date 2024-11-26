"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie2 = exports.movie1 = exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.mostrar_datosPeliculas = function () {
        console.log("Titulo: ".concat(this.title));
        console.log("A\u00F1o lanzamiento: ".concat(this.releaseYear));
        console.log("Nacionalidad: ".concat(this.nacionality));
        console.log("Genero: ".concat(this.genre));
    };
    return Movie;
}());
exports.Movie = Movie;
exports.movie1 = new Movie("El filo de lo imposible", 2019, "USA", "Ficcion");
exports.movie2 = new Movie("Guerra de las galaxias", 2014, "Canada", "Ciencia ficcion");
