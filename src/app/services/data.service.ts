import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Squad } from '../models/squad';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private squad: BehaviorSubject<Squad> = new BehaviorSubject<Squad>({numWatchers: 1, rangeValues: [18, 45], includesParents: false})
  public squad$: Observable<Squad> = this.squad.asObservable();
  
  constructor() { }
}
