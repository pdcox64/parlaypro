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
  transactionfee: string;
  thisbetamount: string;
  betcounter: number;
  
  constructor(public events: Events, public storage: Storage) {

        // load saved betslips
      //this.getstoreddata();
      this.betcounter=0;
      this.thisbetamount = "0.00000";
      this.transactionfee = "0.00012";
      this.totalbetamount = (Number(this.thisbetamount) + Number(this.transactionfee)).toFixed(5).toString();

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
          this.betcounter++;
      });
    }

    sendMessage(text: string, type: string){

    }

    cancelAllBets(){
        // remove all placed bets
       
            for(let laybet of this.betslip.laybetsliparray)
            { // laybets
                if(laybet.open == true)
                {
                  let index: number = this.betslip.laybetsliparray.indexOf(laybet);
                  this.betslip.laybetsliparray.splice(index,1);
                  this.events.publish('liability', (Number(laybet.liability) * -1).toFixed(5).toString()) ;
                  this.betcounter--;
                }
               
            }
        
        for(let backbet of this.betslip.backbetsliparray)
        {
            for(let backbet of this.betslip.backbetsliparray)
            { // backbets
                if(backbet.open)
                {
                  let index: number = this.betslip.backbetsliparray.indexOf(backbet);
                  this.betslip.backbetsliparray.splice(index,1);
                  this.events.publish('profit', (Number(backbet.profit) * -1).toFixed(5).toString()) ;
                  this.betcounter--;
                }
            }
        }
       
       
        // send message
        this.events.publish('message','All bets have been successfully cancelled', 'success');
    }

    cancelLayBet(laybet: LayBets){
      // remove selected lay betslip
      let index: number = this.betslip.laybetsliparray.indexOf(laybet);
      this.betslip.laybetsliparray.splice(index,1);
      this.betcounter--;
      // send message
      this.events.publish('message','Bet has been successfully cancelled', 'success');
    }

    cancelBackBet(backbet: BackBets){
      // remove selected back betslip
      let index: number = this.betslip.backbetsliparray.indexOf(backbet);
      this.betslip.backbetsliparray.splice(index,1);
      this.betcounter--;
      // send message
      this.events.publish('message','Bet has been successfully cancelled', 'success');
    }

    placeBets(){
      // Go through all unopen bets and mark as open
      for(let laybet of this.betslip.laybetsliparray)
      { // laybets
          if(laybet.open){
              laybet.open = false;}
      }
      for(let backbet of this.betslip.backbetsliparray)
      { // backbets
          if(backbet.open){
              backbet.open = false;}
      }
      this.events.publish('message','All bets have been successfully placed', 'success');
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
