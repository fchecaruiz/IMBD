import {Professional} from "./Professional"

export class Movie {
    
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;


    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    
    public mostrar_datosPeliculas(): void {
        console.log(`Titulo: ${this.title}`);
        console.log(`Año lanzamiento: ${this.releaseYear}`);
        console.log(`Nacionalidad: ${this.nacionality}`);
        console.log(`Genero: ${this.genre}`);
    }
}



export const movie1  = new Movie("El filo de lo imposible", 2019, "USA", "Ficcion");
export const movie2 = new Movie ("Guerra de las galaxias", 2014, "Canada","Ciencia ficcion");
        
