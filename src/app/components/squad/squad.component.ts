import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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

  constructor(public readonly dataService: DataService) { }

  ngOnInit(): void {
  }

}
