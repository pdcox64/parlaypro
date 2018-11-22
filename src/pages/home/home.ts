import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../globals/globals';
import { MainPage } from '../main/main';
import {Sports} from '../../globals/globals';
import {SportEvents} from '../../globals/globals';
import {Markets} from '../../globals/globals';
import {MarketsDates} from '../../globals/globals';
import {BetWin} from '../../globals/globals';
import { BackBets, LayBets, BetSlip, BetList } from '../../globals/mock-events';

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

  constructor(public navCtrl: NavController, public navparams: NavParams) {


  }

  onClickLogin(): void {
       // go to main page
       this.navCtrl.push(MainPage, {username: this.login.username});
       }

  
}
