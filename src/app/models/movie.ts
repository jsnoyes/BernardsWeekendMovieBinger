export class Movie {
    preference = 50;
    image: string;
    name: string;
    year: number;

    constructor(image: string, name: string, year: number){
        this.image = image;
        this.name = name;
        this.year = year;
    }
}
