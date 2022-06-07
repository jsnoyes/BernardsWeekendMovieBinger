import { Component, ViewEncapsulation } from '@angular/core';
import { Steps } from 'primeng/steps';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'WeekendBinger';
  steps: MenuItem[] = [
    { label: 'Favs', routerLink: 'favs' },
    { label: 'Squad', routerLink: 'squad' },
    { label: 'Mood', routerLink: 'mood' },
  ];

  ngOnInut() { }
}
