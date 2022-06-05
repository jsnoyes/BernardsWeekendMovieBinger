export class Movie {
    preference = 50;
    image: string;
    name: string;

    constructor(image: string, name: string){
        this.image = image;
        this.name = name;
    }
}
