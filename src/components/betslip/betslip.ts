import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { BackBets,LayBets, BetSlip } from '../../globals/mock-events';
import { Storage } from '@ionic/storage';
import { TestData} from '../../globals/test-data';

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
  
  constructor(public events: Events, public storage: Storage, public testdata: TestData) {

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
      console.log(testdata.betslip.laybetsliparray);

      // add test data for matched bet
      for(let laybet of testdata.betslip.laybetsliparray)
            { // laybets
              if(laybet.open==false){
                this.betslip.laybetsliparray.push(laybet);
              }  
      } 
      for(let backbet of testdata.betslip.backbetsliparray)
            { // backbets
              if(backbet.open==false){
                this.betslip.backbetsliparray.push(backbet);
              }  
      } 
  }

    getStyle(won: string){
      //console.log(won);
      if(won=="true"){
        return 'lay-matched-style-lost';}
      else{
        return 'matched-style';
      }
    }


    getBackStyle(won: string){
      //console.log(won);
      if(won=="true"){
        return 'back-matched-style-won';}
      else{
        return 'matched-style';
      }
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
      // reset totals
      this.betcounter=0;
      this.thisbetamount = "0.00000";
      this.totalbetamount = "0.00000";
      this.events.publish('message','All bets have been successfully placed', 'success');
    }

  makeCode(){
    // temp code for making betslips
   var mytext: string;

    // Lay Bets
    /*
    for(let laybetslip of this.betslip.laybetsliparray)
        {
          mytext += 'laybets = new LayBets;\r'
          for(let laybet of laybetslip.LayBetListArray){
              mytext += "laybets.LayBetListArray.push({id:0, market1: \'" + laybet.market1 + "\'";
              mytext += ", market2: \'" + laybet.market2 + "\'"; 
              mytext += ", icon: \'" + laybet.icon + "\'";
              mytext += ", sport: \'" + laybet.sport + "\'";
              mytext += ", event: \'" + laybet.event + "\'";
              mytext += ", date: \'" + laybet.date + "\'";
              mytext += ", winner: \'" + laybet.winner + "\'";
              mytext += ", style:\'\'";
              mytext += ", partial:false";
              if(laybet.overunder == 'undefined'){mytext += "\'\';"}
              else{
                mytext += ", overunder: \'" + laybet.overunder + "\'});";}
              mytext+='\r';
          }
          mytext += "laybets.stake = \'" + laybetslip.stake + "\';\r"
          mytext += "laybets.odds = \'" + laybetslip.odds + "\';\r"
          mytext += "laybets.liability = \'" + laybetslip.liability + "\';\r"
          mytext += "laybets.processed = true; \r";
          mytext += "laybets.user=1; \r";
          mytext += "laybets.matched=true; \r";
          mytext += "laybets.sport = 4; \r";
          mytext += "this.betslip.laybetsliparray.push(laybets);"; 
        }
        console.log(mytext);*/

        // Back Bets
        for(let backbetslip of this.betslip.backbetsliparray)
        {
          mytext += 'backbets = new BackBets;\r'
          for(let backbet of backbetslip.BackBetListArray){
              mytext += "backbets.BackBetListArray.push({id:0, market1: \'" + backbet.market1 + "\'";
              mytext += ", market2: \'" + backbet.market2 + "\'"; 
              mytext += ", icon: \'" + backbet.icon + "\'";
              mytext += ", sport: \'" + backbet.sport + "\'";
              mytext += ", event: \'" + backbet.event + "\'";
              mytext += ", date: \'" + backbet.date + "\'";
              mytext += ", winner: \'" + backbet.winner + "\'";
              mytext += ", style:\'\'";
              mytext += ", partial:false";
              mytext += ", overunder: \'" + backbet.overunder + "\'";
              mytext += ", won: \'" + backbet.won + "\'});";
              mytext+='\r';
          }
          mytext += "backbets.stake = \'" + backbetslip.stake + "\';\r"
          mytext += "backbets.odds = \'" + backbetslip.odds + "\';\r"
          mytext += "backbets.profit = \'" + backbetslip.profit + "\';\r"
          mytext += "backbets.processed = true; \r";
          mytext += "backbets.user=1; \r";
          mytext += "backbets.matched=true; \r";
          mytext += "backbets.sport = 2; \r";
          mytext += "this.betslip.backbetsliparray.push(backbets);"; 
        }
        console.log(mytext);
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
