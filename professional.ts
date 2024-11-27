import { movie1 } from "./Movie";
import { movie2 } from "./Movie";


export class Professional {

    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
    

    constructor(
        name: string,
        age: number,
        weight: number,
        height: number,
        isRetired: boolean,
        nationality: string,
        oscarsNumber: number,
        profession: string
    ) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    public mostrar_atributos (): void {
        console.log(`Nombre: ${this.name}`);
        console.log(`Año: ${this.age}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Height: ${this.height}`);
        console.log(`Retirdado: ${this.isRetired}`);
        console.log(`Nacionalidad: ${this.nationality}`);
        console.log(`Oscars: ${this.oscarsNumber}`);
        console.log(`Profesion: ${this.profession}`);
    }
}



export let actor = new Professional("Robert Downey Jr.", 56, 78, 174, false, "Europeo", 2, "Actor de cine ");


