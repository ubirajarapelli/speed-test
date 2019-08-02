import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from './utils/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private storage: Storage) { }

  userName: string = 'Usuário';

  userForm = new FormGroup({
    name: new FormControl('')
  });

  ngOnInit() {
    this.getUser();
  };

  getUser() {
    const userStorage = this.storage.getStorage('userName');
    if(userStorage === null) {
      return this.userName;
    }
    this.userName = userStorage.name;
  };

  onSubmit() {
    this.storage.setSorage('userName', this.userForm.value);
    this.getUser();
  };

 }

