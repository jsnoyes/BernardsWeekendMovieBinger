import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrls: ['./calculating.component.css']
})
export class CalculatingComponent implements OnInit {
  public isCalculating = true;

  constructor(public readonly dataService: DataService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.dataService.calculate();
    this.isCalculating = false;
  }

  nextResult(): void {
    this.router.navigate(['/result', {id: 1}]);
  }
}
