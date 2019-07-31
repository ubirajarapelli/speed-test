import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-speed',
  templateUrl: './test-speed.component.html',
  styleUrls: ['./test-speed.component.css']
})
export class TestSpeedComponent implements OnInit {

  mbMin: number = 90;
  mbMax: number = 100
  stop: boolean = false;
  speedValues: Array<number> = new Array();
  speed: number;
  timer: any;

  speedDownloadAvg: number;
  speedUploadAvg: number;
  speedPingAvg: number;
  user: string;

  upload: string;
  download: string;
  ping: string;

  objTosave: Array<object>;
  history: Array<object>;

  constructor() { }

  ngOnInit() {
    this.interval();
    this.getUser();
    this.getHistory();
  };

  interval(): any {
    this.timeOut();
    const intervalTtime = setInterval(() => {
      if(this.stop) {
        clearInterval(intervalTtime);

        this.calcSpeedAvg(this.speedValues);

        this.saveSpeedAVG()

        // this.setSorage('speedTest', this.objTosave);
      }

      this.speedValues.push(this.random(this.mbMin, this.mbMax));

      this.speed = this.speedValues[this.speedValues.length -1];
      this.download = `${this.speedValues[this.speedValues.length -1]}`;
      this.upload = (this.speedValues[this.speedValues.length -1] / 8).toFixed(1);
      this.ping = `${Math.floor(this.speedValues[this.speedValues.length -1] / 12)}`;

    }, 500);
  };

  private random(min: number, max: number): number {
    return Math.floor(Math.random()*(max-min+1)+min);
  };

  private timeOut() {
    return setTimeout(() => { this.stop = true }, 10000)
  };

  private calcSpeedAvg(values: Array<number>): void {
    const speedAvg = values.reduce((sum, grade) => sum += grade, 0) / values.length;
    this.speedDownloadAvg = speedAvg;
    this.speedUploadAvg = speedAvg / 8;
    this.speedPingAvg = speedAvg / 12;
  }

  private saveSpeedAVG() {
    const persist = this.getStorage('speedTest');
    let arrTemp = []

    const obj = {
      userName: this.user,
      dateTime: Date.now(),
      speedDownloadAvg: this.speedDownloadAvg,
      speedUploadAvg: this.speedUploadAvg,
      speedPingAvg: this.speedPingAvg
    };

    if(persist === null) {
      arrTemp.push(obj)
      return this.objTosave = arrTemp
    }

    return this.objTosave = [].concat(obj, persist);
  };

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

  getHistory() {
    this.history = this.getStorage('speedTest');
  };
}

// setUser() {
  //   localStorage.setItem('userInfo', JSON.stringify({userName: 'Usuário'}))
  // };
