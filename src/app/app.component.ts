import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  stop: boolean = false;
  mediz: Array<number> = new Array();
  speed: string;
  timer: any;

  ngOnInit() {
    this.interval();
  }

  random(min: number, max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
  };

  timeOut() {
    return setTimeout(() => { this.stop = true }, 10000)
  };

  interval(): any {
    this.timeOut()
    const timez = setInterval(() => {
      if(this.stop ) {
        clearInterval(timez);
        this.setSorage(this.mediz)
      }
      this.speed  = `${this.mediz[this.mediz.length -1]} Mbps`
      this.mediz.push(this.random(90,100))
    }, 500);
  };

  setSorage(speed: Array<number>) {
    localStorage.setItem('speedTest', JSON.stringify({data: new Date(), speedData: speed}))
  };
}
