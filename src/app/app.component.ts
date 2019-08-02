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
    const userInfo = this.storage.getStorage('userInfo');
    (userInfo === null) ? this.userName = 'Usuario' : this.userName = userInfo.userName;
  };

  onSubmit() {
    this.storage.setSorage('userInfo', this.userForm.value);
    this.getUser();
  };

 }

