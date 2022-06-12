import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrls: ['./calculating.component.css']
})
export class CalculatingComponent implements OnInit {

  constructor(public readonly dataService: DataService) { }

  async ngOnInit(): Promise<void> {
    await this.dataService.sendMessages();
  }

}
