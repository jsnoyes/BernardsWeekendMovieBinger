import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { BehaviorSubject, firstValueFrom, Observable, timer } from 'rxjs';
import { Mood } from '../models/mood';
import { Movie } from '../models/movie';
import { Squad } from '../models/squad';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private initMovies: Movie[] = [
    { name: 'Groundhog Day', year: 1993, preference: 0, image: '../../../assets/Groundhog Day.jpg'},
    { name: 'The Shawshank Redemption', year: 1994, preference: 0, image: '../../../assets/The Shawshank Redemption.jpg'},
    { name: 'Aladdin', year: 1992, preference: 0, image: '../../../assets/Aladdin.jpg'},
    { name: 'Schindler\'s List', year: 1993, preference: 0, image: '../../../assets/Schindler\'s List.jpg'},
    { name: 'Fight Club', year: 1999, preference: 0, image: '../../../assets/Fight Club.jpg'},
    { name: 'The Silence of the Lambs', year: 1991, preference: 0, image: '../../../assets/The Silence of the Lambs.jpg'},
    { name: 'Back to the Future', year: 1985, preference: 0, image: '../../../assets/Back to the Future.jpg'},
    { name: 'Alien', year: 1979, preference: 0, image: '../../../assets/Alien.jpg'},
    { name: 'The Shining', year: 1980, preference: 0, image: '../../../assets/The Shining.jpg'}];

  private initSquad: Squad = {numWatchers: 1, rangeValues: [18, 45], includesParents: false};

  private initMood: Mood = { energyLevel: 50, thoughtfulness: 50, humor: 50 };

  private squad: BehaviorSubject<Squad> = new BehaviorSubject<Squad>(this.initSquad);
  public $squad: Observable<Squad> = this.squad.asObservable();

  private movies: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(this.initMovies);
  public $movies: Observable<Movie[]> = this.movies.asObservable();

  private mood: BehaviorSubject<Mood> = new BehaviorSubject<Mood>(this.initMood);
  public $mood: Observable<Mood> = this.mood.asObservable();

  public messages: Message[] = [];
  
  constructor() { }

  public updateSquad(partialSquad: Partial<Squad>): void {
    this.squad.next({...this.squad.value, ...partialSquad });
  }

  public updateMovie(movieName: string, movieRating: number): void {
    const movies = this.movies.value;
    const ind = movies.findIndex((mov) => mov.name === movieName);
    movies[ind].preference = movieRating;
    this.movies.next(movies);
  }

  public updateMood(partialMood: Partial<Mood>): void {
    this.mood.next({...this.mood.value, ...partialMood });
  }

  public async sendMessages(): Promise<void> {
    this.messages.push({severity: 'info', detail: 'Loading MovieMatcher model...'});
    await this.delay(3000);
    this.messages.push({severity: 'info', detail: 'Categorizing user based on entered movie ratings...'});
    await this.delay(3000);
    this.messages.push({severity: 'info', detail: 'User found as strong match for category "Simple"...'});
    await this.delay(1000);

  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
