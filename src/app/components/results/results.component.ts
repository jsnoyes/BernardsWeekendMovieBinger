import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Result } from 'src/app/models/result';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  result!: Result;
  loaded = false;

  constructor(private route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit(): void {
    this.result = this.dataService.getResult(Number(this.route.snapshot.paramMap.get('id')));
    this.loaded = true;
  }

}
