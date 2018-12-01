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
  placebets: boolean = true;
  totalbetamount: string;
  transactionfee: number = 0.00012;
  thisbetamount: string;
  
  constructor(public events: Events, public storage: Storage) {

        // load saved betslips
        // more comments
      this.getstoreddata();

      this.totalbetamount = "";
      this.transactionfee = 0.00012;

      events.subscribe('bets', (bets, type, thisbet) => {
       
          var betscopy = JSON.parse(JSON.stringify(bets));
          if(type ==1 ){ //lay bets 
              this.betslip.laybetsliparray.push(betscopy);
          }
          else{ //back bets
              this.betslip.backbetsliparray.push(betscopy);
          }   
          // update the totals
          this.thisbetamount = this.calculateTotalBet(this.betslip).toFixed(5).toString();
          this.totalbetamount = (Number(this.thisbetamount) + Number(this.transactionfee)).toFixed(5).toString();
          
      });
    }

    calculateTotalLayBetLiability(thisbetslip: BetSlip): number{
        var total: number = 0;  
       
        for(let laybet of thisbetslip.laybetsliparray)
        {
            if(laybet.open){
                total += Number(laybet.liability);}
        }
        return total;
    }

    calculateTotalBackBetStake(thisbetslip: BetSlip): number{
      var total: number = 0;  
      
        for(let backbet of thisbetslip.backbetsliparray)
        {
            if(backbet.open){
              total += Number(backbet.stake);}            
        }
        return total;
    }

    calculateTotalBet(thisbetslip: BetSlip){

      var totalbetamount: number;

      // total bet amount = total liablity + total stake.
      totalbetamount = this. calculateTotalLayBetLiability(thisbetslip);
      totalbetamount += this.calculateTotalBackBetStake(thisbetslip);

      return totalbetamount;
    }

    unmatchedClick(){
      this.toggle=1;
    }

    matchedClick(){
      this.toggle=2;
    }

    placebetsClick(){
      this.placebets=true;
    }

    openbetsClick(){
      this.placebets=false;
    }

    formatNumber(amount: number){
      return amount.toFixed(5).toString();
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
