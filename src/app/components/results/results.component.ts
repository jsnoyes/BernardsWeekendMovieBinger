import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/models/result';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  result!: Result;
  loaded = false;
  id!: number;

  public assetLocation = environment.assetLocation;

  constructor(private route: ActivatedRoute, public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.load(Number(this.route.snapshot.paramMap.get('id')));
    this.loaded = true;
  }

  load(id: number): void {
    this.id = id;
    this.result = this.dataService.getResult(id);
  }

  nextResult(): void {
    this.router.navigate(['/result', {id: this.id + 1}]);
    this.load(this.id + 1);
  }
}
