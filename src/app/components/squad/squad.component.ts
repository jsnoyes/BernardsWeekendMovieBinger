import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Squad } from 'src/app/models/squad';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SquadComponent implements OnInit {

  constructor(public readonly dataService: DataService) { }

  ngOnInit(): void {
  }

  updateSquad(squadPartial: Partial<Squad>): void {
    this.dataService.updateSquad(squadPartial);
  }
}
