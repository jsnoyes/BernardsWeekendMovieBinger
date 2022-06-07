import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SquadComponent implements OnInit {

  numWatchers: number | undefined;
  rangeValues: number[] = [18, 45];
  includesParents: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
