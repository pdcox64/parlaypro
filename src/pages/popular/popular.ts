import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { BackBets, LayBets, BetSlip} from '../../globals/mock-events';
import { TestData} from '../../globals/test-data';

@IonicPage()
@Component({
  selector: 'popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  sport: number;
  betslip: BetSlip;
  bettype: number = 2;

  // Test Data
  betdata: string[] = ['3.10','3.10','3.09',"3.08"];
  stakedata: string[] = ['0.0045','0.0023','0.0009',"0.0177"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public testdata: TestData) {

    this.sport=0;
    this.bettype =  navParams.get('type');
    //this.loadtestdata();
    this.betslip = testdata.betslip;
  }

  calculatestake(value:number, scale:number, precision: number){
      var retvalue: number;

      retvalue = value - (value * (scale/100));
      return retvalue.toFixed(precision).toString();
  }

  cancelPage(){
    this.navCtrl.pop();
  }

  sportClick(sport: number){
    this.sport = sport;
  }

  closeBackBetPage(betslip: BackBets, odds: string, stake: string){
    // update with selected and make back bets that matched
   
    this.events.publish('matchedlaybets',betslip, odds, stake);
    this.navCtrl.pop();
  }

  closeLayBetPage(betslip: LayBets, odds: string, stake: string){
    // update with selected and make back bets that matched
    this.events.publish('matchedbackbets',betslip, odds, stake);
    this.navCtrl.pop();
  }

}
