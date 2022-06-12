import { Component, OnInit } from '@angular/core';
import { Mood } from 'src/app/models/mood';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnInit {

  constructor(public readonly dataService: DataService) { }

  ngOnInit(): void {
  }

  updateMood(partialMood: Partial<Mood>): void {
    this.dataService.updateMood(partialMood);
  }
}
