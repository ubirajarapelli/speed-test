import { Component, OnInit } from '@angular/core';
import { Storage } from '../utils/storage';

@Component({
  selector: 'app-data-history',
  templateUrl: './data-history.component.html',
  styleUrls: ['./data-history.component.css']
})
export class DataHistoryComponent implements OnInit {

  history: Array<object>;
  showHistory: boolean = false;

  constructor( private storage: Storage) { }

  ngOnInit() {
    this.getHistory()
  }

  getHistory() {
    this.history = this.storage.getStorage('speedTest');
    if (this.history === null) {
      this.showHistory = true
    }
  };

}
