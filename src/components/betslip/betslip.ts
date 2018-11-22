import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { BackBets,LayBets, BetSlip } from '../../globals/mock-events';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'betslip',
  templateUrl: 'betslip.html'
})

export class BetslipComponent {
  betslip = new BetSlip;
  thislaybet = new LayBets;
  thisbackbet = new BackBets;
  toggle: number = 1;
  
  constructor(public events: Events, public storage: Storage) {

        // load saved betslips
        this.getstoreddata();

        events.subscribe('bets', (bets, type) => {
        var betscopy = JSON.parse(JSON.stringify(bets));
        if(type ==1 ){ //lay bets 
            this.betslip.laybetsliparray.push(betscopy);
        }
        
        else{ //back bets
            this.betslip.backbetsliparray.push(betscopy);
        }      
      });
    }

    unmatchedClick(){
      this.toggle=1;
    }

    matchedClick(){
      this.toggle=2;
    }

    getstoreddata(){
      this.storage.get("laybetslips").then((thisbetslip) =>{
          if(thisbetslip != null){     
            this.betslip.laybetsliparray = thisbetslip;
          } 
        });

        this.storage.get("backbetslips").then((thisbetslip) =>{
          if(thisbetslip != null){     
            this.betslip.backbetsliparray = thisbetslip;
          } 
        });
    }
}
