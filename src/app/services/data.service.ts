import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mood } from '../models/mood';
import { Movie } from '../models/movie';
import { Result } from '../models/result';
import { Squad } from '../models/squad';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private initMovies: Movie[] = [
    { name: 'Groundhog Day', year: 1993, preference: 0, image: 'Groundhog Day.jpg'},
    { name: 'The Shawshank Redemption', year: 1994, preference: 0, image: 'The Shawshank Redemption.jpg'},
    { name: 'Aladdin', year: 1992, preference: 0, image: 'Aladdin.jpg'},
    { name: 'Schindler\'s List', year: 1993, preference: 0, image: 'Schindler\'s List.jpg'},
    { name: 'Fight Club', year: 1999, preference: 0, image: 'Fight Club.jpg'},
    { name: 'The Silence of the Lambs', year: 1991, preference: 0, image: 'The Silence of the Lambs.jpg'},
    { name: 'Back to the Future', year: 1985, preference: 0, image: 'Back to the Future.jpg'},
    { name: 'Alien', year: 1979, preference: 0, image: 'Alien.jpg'},
    { name: 'The Shining', year: 1980, preference: 0, image: 'The Shining.jpg'}];

  private initResult1: Result = {
    id: 1, name: 'Weekend at Bernie\'s', year: 1989, image: 'Weekend at Bernie\'s.jpg', preference: 99,
    gif: 'Weekend at Bernie\'s.gif', 
    description: 'Two idiots try to pretend that their murdered employer is really alive, leading the hitman to attempt to track him down to finish him off.'
  };  

  private initResult2: Result = {
    id: 2, name: 'Weekend at Bernie\'s II', year: 1993, image: 'Weekend at Bernie\'s II.jpg', preference: 98,
    gif: 'Weekend at Bernie\'s II.gif', 
    description: 'Larry and Richard use a voodoo-revived corpse to track down hidden money to clear their names.'
  };

  private initSquad: Squad = {numWatchers: 1, rangeValues: [18, 45], includesParents: false};

  private initMood: Mood = { energyLevel: 50, thoughtfulness: 50, humor: 50 };

  private squad: BehaviorSubject<Squad> = new BehaviorSubject<Squad>(this.initSquad);
  public $squad: Observable<Squad> = this.squad.asObservable();

  private movies: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(this.initMovies);
  public $movies: Observable<Movie[]> = this.movies.asObservable();

  private mood: BehaviorSubject<Mood> = new BehaviorSubject<Mood>(this.initMood);
  public $mood: Observable<Mood> = this.mood.asObservable();

  public messages: Message[] = [];

  private calculatingProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public $calculatingProgress: Observable<number> = this.calculatingProgress.asObservable();

  private startCalculating: (() => void) | undefined;
  private stopCalculating: (() => void) | undefined;
  
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

  public async calculate(): Promise<void> {
    const interval = setInterval(this.startCalculating!, 33);
    
    this.messages = [ ...this.messages, {severity: 'success', detail: 'Loading MovieMatcher model...'}];
    await this.delay(1000);
    this.calculatingProgress.next(12);

    this.messages = [ ...this.messages, {severity: 'success', detail: 'Categorizing user based on entered movie ratings...'}];
    await this.delay(1000);
    this.calculatingProgress.next(33);

    this.messages = [ ...this.messages, {severity: 'success', detail: 'User found as strong match for category "Simple"...'}];
    await this.delay(2000);
    this.calculatingProgress.next(45);

    if(this.squad.value.numWatchers){
      this.messages = [ ...this.messages, {severity: 'success', detail: 'Number of people watching is "1". Filtering out movies preferred by users categorized as "social"...'}];
      await this.delay(1500);
      this.calculatingProgress.next(56);
    }

    if(this.squad.value.rangeValues[1] > 30)
      this.messages = [ ...this.messages, {severity: 'success', detail: `Age range goes to "${this.squad.value.rangeValues[1]}". Filtering out movies preferred by users categorized as "modern"...`}];
    else
      this.messages = [ ...this.messages, {severity: 'success', detail: `Age range goes to "${this.squad.value.rangeValues[1]}". Filtering out movies with fewer than 7 explosions...`}];
    await this.delay(1000);
    this.calculatingProgress.next(73);

    if(this.squad.value.includesParents)
      this.messages = [ ...this.messages, {severity: 'success', detail: '"With parents" is "true". Filtering out movies with awkward scenes...'}];
    await this.delay(1500);
    this.calculatingProgress.next(82);

    if(this.mood.value.energyLevel > this.mood.value.thoughtfulness && this.mood.value.energyLevel > this.mood.value.humor)
      this.messages = [ ...this.messages, {severity: 'success', detail: 'Primary mood is "energy". Filtering out movies preferred by users categorized as "intelligent" and "funny"...'}];        
    else if(this.mood.value.thoughtfulness > this.mood.value.energyLevel && this.mood.value.thoughtfulness > this.mood.value.humor)
      this.messages = [ ...this.messages, {severity: 'success', detail: 'Primary mood is "thoughfulness". Filtering out movies preferred by users categorized as "active" and "funny"...'}];
    else
      this.messages = [ ...this.messages, {severity: 'success', detail: 'Primary mood is "humor". Filtering out movies preferred by users categorized as "active" and "intelligent"...'}];
    await this.delay(1000);
    this.calculatingProgress.next(100);    
    await this.delay(1000);

    this.stopCalculating!();
    clearInterval(interval);
  }

  public initCalculations(start: () => void, stop: () => void): void {
    this.startCalculating = start;
    this.stopCalculating = stop;
  }

  public getResult(id: number): Result{
    return id % 2 === 1 ? this.initResult1 : this.initResult2;
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
