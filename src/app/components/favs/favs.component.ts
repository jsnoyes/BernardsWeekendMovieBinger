import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavsComponent implements OnInit {

  movies: Movie[] = [
    { name: 'Groundhog Day', year: 1993, preference: 0, image: '../../../assets/Groundhog Day.jpg'},
    { name: 'The Shawshank Redemption', year: 1994, preference: 0, image: '../../../assets/The Shawshank Redemption.jpg'},
    { name: 'Aladdin', year: 1992, preference: 0, image: '../../../assets/Aladdin.jpg'},
    { name: 'Schindler\'s List', year: 1993, preference: 0, image: '../../../assets/Schindler\'s List.jpg'},
    { name: 'Fight Club', year: 1999, preference: 0, image: '../../../assets/Fight Club.jpg'},
    { name: 'The Silence of the Lambs', year: 1991, preference: 0, image: '../../../assets/The Silence of the Lambs.jpg'},
    { name: 'Back to the Future', year: 1985, preference: 0, image: '../../../assets/Back to the Future.jpg'},
    { name: 'Alien', year: 1979, preference: 0, image: '../../../assets/Alien.jpg'},
    { name: 'The Shining', year: 1980, preference: 0, image: '../../../assets/The Shining.jpg'}];
  
  constructor() { }

  ngOnInit(): void {
  }

}
