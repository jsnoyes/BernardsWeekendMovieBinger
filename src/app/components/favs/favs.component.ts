import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  movies: Movie[] = [
    { name: 'Groundhog Day', preference: 0, image: '../../../assets/Groundhog Day.jpg'},
    { name: 'The Shawshank Redemption', preference: 0, image: '../../../assets/The Shawshank Redemption.jpg'},
    { name: 'Aladdin', preference: 0, image: ' '},
    { name: 'Schindler\'s List', preference: 0, image: ' '},
    { name: 'Fight Club', preference: 0, image: ' '},
    { name: 'The Silence of the Lambs', preference: 0, image: ' '},
    { name: 'Back to the Future', preference: 0, image: ' '},
    { name: 'Alien', preference: 0, image: ' '},
    { name: 'The Shining', preference: 0, image: ' '}]; 
  test: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
