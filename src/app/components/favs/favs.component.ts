import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavsComponent implements OnInit {

  public assetLocation = environment.assetLocation;
  
  constructor(public readonly dataService: DataService) { }

  ngOnInit(): void {
  }

  updateMovie(movieName: string, movieRating: number): void {
    this.dataService.updateMovie(movieName, movieRating);
  }
}
