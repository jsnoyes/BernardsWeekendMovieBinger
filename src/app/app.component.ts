import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Steps } from 'primeng/steps';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'WeekendBinger';
  steps: MenuItem[] = [
    { label: 'Favs', routerLink: 'favs' },
    { label: 'Squad', routerLink: 'squad' },
    { label: 'Mood', routerLink: 'mood' },
  ];

  @ViewChild('myCanvas')
  private myCanvas: ElementRef = {} as ElementRef;
  public context!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
  }

  startDrawing(): void {    
    var s = window.screen;
    var width = s.width;
    var height = s.height;
    var letters = new Array<number>(256).fill(1);

    var draw =  () => {
      this.context.fillStyle='rgba(0,0,0,.05)';
      this.context.fillRect(0,0,width,height);
      this.context.fillStyle='#0F0';
      const ttt = this;
      letters.map(function(y_pos, index){
        const text = String.fromCharCode(3e4+Math.random()*33);
        const x_pos = index * 10;
        ttt.context.fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
      });
    };
    
    const inter = setInterval(draw, 33);
    this.stopDrawing = () => clearInterval(inter);
  }

  stopDrawing: (() => void) | undefined;


  ngOnDestroy() {
  }

  ngOnInut() {
   }
  
}
