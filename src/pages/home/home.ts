import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../../globals/globals';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login: Login = {
    username: '',
    password: ''
  };
  title1 = 'Parlay';
  title2 = 'Pro';

  constructor(public navCtrl: NavController) {

  }

  onClickLogin(): void {
        alert('click');
       // go to main page
       this.navCtrl.push(MainPage);
       }
}
