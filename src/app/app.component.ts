import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  stop: boolean = false;
  speedValues: Array<number> = new Array();
  speed: number;
  timer: any;

  speedDownloadAvg: number;
  speedUploadAvg: number;
  speedPingAvg: number;
  user: string;

  upload: number;
  download: number;
  ping: string;

  objTosave: object;

  constructor() {

  }

  ngOnInit() {
    this.interval();
    this.getUser();
  };

  interval(): any {
    this.timeOut();
    const intervalTtime = setInterval(() => {
      if(this.stop) {
        clearInterval(intervalTtime);
        this.calcSpeedAvg(this.speedValues)
        this.objTosave = {
          name: this.user,
          date: new Date,
          speedDownloadAvg: this.speedDownloadAvg;
          speedUploadAvg: this.speedUploadAvg;
          speedPingAvg: this.speedPingAvg;
        }

        this.setSorage('speedTest', this.objTosave)
      }

      this.speedValues.push(this.random(90,100));

      this.speed = this.speedValues[this.speedValues.length -1];
      this.download = this.speedValues[this.speedValues.length -1];
      this.upload = (this.speedValues[this.speedValues.length -1] / 8).toFixed(1);
      this.ping = Math.floor(this.speedValues[this.speedValues.length -1] / 12);

    }, 500);
  };

  private random(min: number, max: number): number {
    return Math.floor(Math.random()*(max-min+1)+min);
  };

  private timeOut() {
    return setTimeout(() => { this.stop = true }, 10000)
  };

  private calcSpeedAvg(values: Array<number>): number {
    const speedAvg = values.reduce((sum, grade) => sum += grade, 0) / values.length;
    this.speedDownloadAvg = speedAvg;
    this.speedUploadAvg = speedAvg / 8;
    this.speedPingAvg = speedAvg / 12;
  }

  private setSorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  };

  private getStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  };

  getUser() {
    const userInfo = this.getStorage('userInfo');
    (userInfo === null) ? this.user = 'Usuario' : this.user = userInfo.userName;
  };

  // setUser() {
  //   localStorage.setItem('userInfo', JSON.stringify({userName: 'Usuário'}))
  // };
}
