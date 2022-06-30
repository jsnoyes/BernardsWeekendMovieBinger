import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'Weekend Binger';
  steps: MenuItem[] = [
    { label: 'Favs', routerLink: 'favs' },
    { label: 'Squad', routerLink: 'squad' },
    { label: 'Mood', routerLink: 'mood' },
  ];

  @ViewChild('myCanvas')
  private myCanvas: ElementRef = {} as ElementRef;
  public context!: CanvasRenderingContext2D;

  constructor(private readonly dataService: DataService){}

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');

    this.dataService.initCalculations(this.startDrawing(), this.stopDrawing());
  }

  startDrawing(): () => void {
    var width = window.innerWidth;
    var height = window.innerHeight;
    const letters = new Array<number>(Math.floor(width / 10)).fill(1).map(s => -Math.random() * height);

    return () => {
      this.context.fillStyle='rgba(0,0,0,.05)';
      this.context.fillRect(0,0,width,height);
      this.context.fillStyle='#0F0';
      const ttt = this;
      letters.map(function(y_pos, index){
        const text = String.fromCharCode(33 + Math.random() * 93);
        const x_pos = index * 10;
        ttt.context.fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
      });
    };
  }

  stopDrawing(): () => void {
    const ths = this;
    return () => {
      ths.context.fillStyle='rgba(0,0,0)';
      ths.context.fillRect(0,0,window.screen.width,window.screen.height);
      ths.context.fillStyle='#0F0';
    }
  }
  
}
