import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { BackBets, LayBets, BetSlip, BetList } from '../../globals/mock-events';

@Component({
  selector: 'selector',
  templateUrl: 'selector.html',
})

export class SelectorPage {

      betslip = new BetSlip;
      matchedlaybets = new LayBets;
      matchedbackbets = new BackBets;
      bettype: number = 1;
      nomatches:boolean = false;
      partial: string;

      // Test Data
      betdata: string[] = ['3.10','3.10','3.09',"3.08"];
      stakedata: string[] = ['0.0045','0.0023','0.0009',"0.0177"];
      
      constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {

        this.betslip =  navParams.get('matchedbets');
        this.bettype =  navParams.get('type');

        if(this.bettype == 1 && this.betslip.laybetsliparray.length==0){
          this.nomatches=true
        };
        if(this.bettype == 2 && this.betslip.backbetsliparray.length==0){
          this.nomatches=true
        };

        this.partial = "red";
  }

  closeBackBetPage(betslip: BackBets, selection: number){
        // update with selected and make back bets that matched
        this.createlaybet(betslip);
        this.events.publish('matchedbackbets',this.matchedlaybets, this.betdata[selection], this.stakedata[selection]);
        this.navCtrl.pop();
  }

  closeLayBetPage(betslip: LayBets, selection: number){
      // update with selected and make back bets that matched
      this.createbackbet(betslip);
      this.events.publish('matchedlaybets',this.matchedbackbets, this.betdata[selection], this.stakedata[selection]);
      this.navCtrl.pop();
  }

  cancelPage(){
    this.navCtrl.pop();
  }

  createbackbet(betslip: LayBets){
    // make a back bet from the laybets
      for(let bets of betslip.LayBetListArray)
      {
        var laybetlist = new BetList;
        laybetlist.date = bets.date;
        laybetlist.event = bets.event;
        laybetlist.icon = bets.icon;
        laybetlist.market1 = bets.market1;
        laybetlist.market2 = bets.market2;
        laybetlist.sport = bets.sport;
        laybetlist.winner = bets.winner;
         this.matchedbackbets.BackBetListArray.push(laybetlist);
      }
  }

  createlaybet(betslip: BackBets){
    // make a back bet from the laybets
      for(let bets of betslip.BackBetListArray)
      {
        var backbetlist = new BetList;
         backbetlist.date = bets.date;
         backbetlist.event = bets.event;
         backbetlist.icon = bets.icon;
         backbetlist.market1 = bets.market1;
         backbetlist.market2 = bets.market2;
         backbetlist.sport = bets.sport;
         backbetlist.winner = bets.winner;
         this.matchedlaybets.LayBetListArray.push(backbetlist);
      }
  }

}
