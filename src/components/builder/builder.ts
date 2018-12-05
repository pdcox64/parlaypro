import { Component } from '@angular/core';
import { Events, ModalController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { BackBets, LayBets, BetSlip, BetList, Message} from '../../globals/mock-events';
import { Markets } from '../../globals/globals';
import { SelectorPage } from '../../pages/selector/selector';
import { PopularPage } from '../../pages/popular/popular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'builder',
  templateUrl: 'builder.html'
})

export class BuilderComponent {
  
  toggle: number = 1;
  laybetcounter: number = 0;
  backbetcounter: number = 0;
  nocontent: boolean = true;
  public exactlaymatch: boolean;
  public exactbackmatch: boolean ;

  messagetext: string = "";

  market: Markets;
  winner: string = "";
  marketdate: string;
  layodds: string = "1.00";
  laystake: string = "0.0000";
  layliability: string = "0.0000";
  backodds: string = "1.00";
  backstake: string = "0.0000";
  backprofit: string = "0.0000";
  errormessage: string;
  
  betlist = new BetList;
  backbets = new BackBets;
  laybets = new LayBets;
  
  matchedbets: BetSlip;
  processedbetslips = new BetSlip;
  betslip = new BetSlip;
  matchedbackbets = new BackBets;

  balance: number;
  
  constructor(public events: Events, public modalCtrl: ModalController, 
              public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage) {
   
    // set defaults
    this.exactbackmatch = true;
    this.exactlaymatch = true;
    this.matchedbets = new BetSlip;
    this.errormessage = "";
    
     // load existing data
     this.loadbetdata();

     setInterval(() => {
      this.errormessage = "none";
        }, 8000);

    // look for event changes

    events.subscribe('balance', (balance: string) => {
        // convert to number
      this.balance = Number(balance);
    });

    events.subscribe('matchedlaybets', (matchedbets: BackBets, bet: string, stake: string) => {
          // matched lay bets
          this.backbets = new BackBets;
          for(let laybetslipfound of matchedbets.BackBetListArray)
          {
                this.betlist = new BetList;
                this.betlist.date = laybetslipfound.date;
                this.betlist.event = laybetslipfound.event;
                this.betlist.sport = laybetslipfound.sport;
                this.betlist.icon = laybetslipfound.icon;
                this.betlist.market1 = laybetslipfound.market1;
                this.betlist.market2 = laybetslipfound.market2;
                this.betlist.winner = laybetslipfound.winner;
                this.betlist.overunder = laybetslipfound.overunder;
                this.backbetcounter++;
                this.backbets.BackBetListArray.push(this.betlist);
          }
          this.backodds = bet;
          this.backstake = stake;   
          this.backbets.matched = true;
          this.backbets.open=true;
      });

      events.subscribe('matchedbackbets', (matchedbets: LayBets, bet: string, stake: string) => {
          // matched back bets
          this.laybets = new LayBets;
          for(let backbetslipfound of matchedbets.LayBetListArray)
          {
                this.betlist = new BetList;
                this.betlist.date = backbetslipfound.date;
                this.betlist.event = backbetslipfound.event;
                this.betlist.sport = backbetslipfound.sport;
                this.betlist.icon = backbetslipfound.icon;
                this.betlist.market1 = backbetslipfound.market1;
                this.betlist.market2 = backbetslipfound.market2;
                this.betlist.winner = backbetslipfound.winner;
                this.betlist.overunder=backbetslipfound.overunder;
                  // add back bet
                  this.laybetcounter++;
                  this.laybets.LayBetListArray.push(this.betlist);
          }
          this.layodds = bet;
          this.laystake = stake;
          this.laybets.matched = true;
          this.laybets.open = true;
      });
      

    events.subscribe('market', (sport, event, market, marketdate, winner, range) => {
      // single bets
      this.betlist = new BetList;
      this.betlist.date = marketdate;
      this.betlist.event = event.event;
      this.betlist.sport = sport.sport;
      this.betlist.icon = sport.icon;
      this.betlist.market1 = market.market1;
      this.betlist.market2 = market.market2;
      this.betlist.winner = winner;
      this.betlist.overunder = range;

      if(this.toggle==1){
          // add lay bet
          this.laybetcounter++;
          this.laybets.processed = false;  
          this.laybets.open = true;
          this.laybets.LayBetListArray.push(this.betlist);
      }
      else{
          // add back bet
          this.backbetcounter++;
          this.backbets.processed = false;
          this.backbets.open = true;
          this.backbets.BackBetListArray.push(this.betlist);
        }
      });
    }

    messageBar(messageType: string, message: string) {
      this.errormessage = messageType;
      this.messagetext = message;
    }

    layClick(){
      this.toggle=1;
    }

    backClick(){
      this.toggle=2;
    }

    arrowup(){
      // convert to number
      var oddint = Number(this.layodds);
      oddint += 0.01;
      this.layodds=oddint.toFixed(2).toString();
    }

    arrowdown(){
      // convert to number
      var oddint = Number(this.layodds);
      if(oddint > 1){
        oddint -= 0.01;
        this.layodds = oddint.toFixed(2).toString();
        }
    }

    backarrowup(){
      // convert to number
      var oddint = Number(this.backodds);
      oddint += 0.01;
      this.backodds=oddint.toFixed(2).toString();
    }

    backarrowdown(){
      // convert to number
      var oddint = Number(this.backodds);
      if(oddint > 1){
        oddint -= 0.01;
        this.backodds = oddint.toFixed(2).toString();
        }
    }

    addBet(){

      if(this.toggle==1){ //lay bets
        // check for errors first
        if(Number(this.laystake) == 0){
            this.messageBar("error", "Stake cannot be zero.");
            return;
        }

        if(this.balance - Number(this.layliability) < 0)
        {
          this.messageBar("error", "Insufficient funds.");
            return;
        }

        // calculate liability
          this.updateLiability();
          this.laybetcounter=0;
          this.laybets.processed = true;
          this.laybets.open = true;
          this.laybets.liability = this.layliability;
          this.laybets.odds = this.layodds;
          this.laybets.stake = this.laystake;
          if(this.laybets.matched != true){this.laybets.matched=false};
          this.betslip.laybetsliparray.push(this.laybets);
          this.events.publish('bets',this.laybets,this.toggle);
           // deduct from balance
          this.events.publish('liability', this.layliability);
          // reset odds etc.
          this.layodds = "1.00";
          this.laystake = "0.0000";
          this.layliability = "0";
          // delete bet
          this.laybets = new LayBets;
      }
      else{ // back bets
        if(Number(this.backstake) == 0){
          this.messageBar("error", "Stake cannot be zero.");
          return;
      }

        this.backbetcounter=0;
        this.backbets.processed = true;
        this.backbets.open=true;
        this.backbets.profit = this.backprofit;
        this.backbets.odds = this.backodds;
        this.backbets.stake = this.backstake;
        if(this.backbets.matched != true){this.backbets.matched=false};
        this.betslip.backbetsliparray.push(this.backbets);
        this.events.publish('bets',this.backbets, this.toggle);
         // deduct from balance
         this.events.publish('profit', this.backstake);
        // reset odds etc.
        this.backodds = "1.00";
        this.backstake = "0.0000";
        this.backprofit = "0";
        // delete bet
        this.backbets = new BackBets;
      }
    }

    deleteClick(bet: BetList){
      if(this.toggle==1){ //lay bets
          this.laybetcounter--;
          // look for bet id
          let index: number = this.laybets.LayBetListArray.indexOf(bet);
          this.laybets.LayBetListArray.splice(index,1);
      }
      else if (this.toggle==2){ // search bets
         // look for bet id
         this.backbetcounter--;
         let index: number = this.backbets.BackBetListArray.indexOf(bet);
         this.backbets.BackBetListArray.splice(index,1);
      }
      else { // back bets
        this.backbetcounter--;
        // look for bet id
        let index: number = this.backbets.BackBetListArray.indexOf(bet);
        this.backbets.BackBetListArray.splice(index,1);
      }
    }

    updateLiability(){
      this.layliability = (Number(this.laystake) * Number(this.layodds)).toFixed(5).toString();
    }

    updateProfit(){
      var odds = Number(this.backodds) - 1;
      this.backprofit = (Number(this.backstake) * Number(odds)).toFixed(5).toString();
    }

    searchLayBets()
    {
      // search for existing lay bets
      var betcounter: number;
      var laybetmatches: number;
      var matchcounter: number =0 ;
      var laybetslippartial: number =0;
      var laybetslipexact: number =0;

      // loop through each lay bet slip
      for(let betslip of this.betslip.laybetsliparray)
      {
          // if number of lay bets and search bets don't match then an exact match can never be found
          if((this.backbets.BackBetListArray.length != betslip.LayBetListArray.length) && this.exactbackmatch==true){
            this.matchedbets = new BetSlip;
            }
          else{
          // loop through each bet on a lay betslip
          laybetmatches = this.backbets.BackBetListArray.length;
          for(let laybet of betslip.LayBetListArray)
          {
              // compare each lay bet with each search bet
              for(let searchbet of this.backbets.BackBetListArray)
              {
                  betcounter= 0;
                  // check each bet on each betslip
                  if(laybet.date == searchbet.date){betcounter++;};
                  if(laybet.sport == searchbet.sport){betcounter++;};
                  if(laybet.market1 == searchbet.market1){betcounter++;};
                  if(laybet.market2 == searchbet.market2){betcounter++;};
                  if(laybet.event == searchbet.event){betcounter++;};
                  if(laybet.winner == searchbet.winner){betcounter++;};
                  if(betcounter == 6)
                  { // found a field match
                    matchcounter++;
                    laybet.style="exact-laymatch";
                    laybet.partial=false;
                  }
                  else{
                    if(laybet.style != "exact-laymatch"){
                        laybet.style = "partial-match";
                        laybet.partial = true;
                    }
                  }
                 
              }
                if(matchcounter == laybetmatches){
                  // found a betslip exact match
                  laybetslipexact++;
                  
                }
                else if(matchcounter >0){
                  // found a betslip partial match
                 
                  laybetslippartial++;
                }
            }
            
              if(laybetslipexact>0){
                // save this betslip
                this.savematchedlaybetslip(betslip);
              }
              else if(laybetslippartial>0){
              // save this betslip but only if partial bets are allowed.
                  if(this.exactbackmatch == false)
                  {
                    this.savematchedlaybetslip(betslip);
                  }
                  else {
                    // clean uo
                    this.matchedbets = new BetSlip;
                  }
                }
          }
        }
          // display popup selector
          this.displayselector(1);
      }

      searchBackBets()
      {
        // search for existing back bets
        var betcounter: number;
        var backbetmatches: number;
        var matchcounter: number =0 ;
        var backbetslippartial: number =0;
        var backbetslipexact: number =0;
      
        // loop through each back bet slip
        for(let betslip of this.betslip.backbetsliparray)
        { 
           // if number of lay bets and search bets don't match then an exact match can never be found
           if((this.laybets.LayBetListArray.length != betslip.BackBetListArray.length) && this.exactlaymatch==true){
            this.matchedbets = new BetSlip;
            }
          else{
            // loop through each bet on a back betslip
            backbetmatches = betslip.BackBetListArray.length;
            for(let backbet of betslip.BackBetListArray)
            {
                // compare each lay bet with each search bet
                for(let searchbet of this.laybets.LayBetListArray)
                {
                    betcounter= 0;
                    // check each bet on each betslip
                    if(backbet.date == searchbet.date){betcounter++;};
                    if(backbet.sport == searchbet.sport){betcounter++;};
                    if(backbet.market1 == searchbet.market1){betcounter++;};
                    if(backbet.market2 == searchbet.market2){betcounter++;};
                    if(backbet.event == searchbet.event){betcounter++;};
                    if(backbet.winner == searchbet.winner){betcounter++;};
                    if(betcounter == 6)
                    { // found a field match
                      matchcounter++;
                      backbet.style = "exact-backmatch";
                      backbet.partial = false;
                    }
                    else{
                      if(backbet.style != "exact-backmatch"){
                          backbet.style = "partial-match";
                          backbet.partial = true;
                      }
                    }
                }
                  if(matchcounter == backbetmatches){
                    // found a betslip exact match
                    backbetslipexact++;
                  }
                  else if(matchcounter >0){
                    // found a betslip partial match
                    backbetslippartial++;
                    }
              }
                if(backbetslipexact>0){
                      // save this betslip
                        this.savematchedbackbetslip(betslip);}
                  else if(backbetslippartial>0){
                        // save this betslip but only if partial bets are allowed.
                        if(this.exactlaymatch == false){
                            this.savematchedbackbetslip(betslip);}
                        else {
                        }
                    }
              }
            }
            // display popup selector
            this.displayselector(2);
        }

      savematchedlaybetslip(laybet: LayBets){
          // add the lay betslip
          this.matchedbets.laybetsliparray.push(laybet);
      }

      savematchedbackbetslip(backbet: BackBets){
        // add the lay betslip
        this.matchedbets.backbetsliparray.push(backbet);
    }

      displayselector(type: number){
        let selectormodal = this.modalCtrl.create(SelectorPage, {matchedbets: this.matchedbets, type: type});
        // remove old bets
        this.matchedbets = new BetSlip;
        selectormodal.present();
      }

      searchpopular(type: number){
        let popularmodal = this.modalCtrl.create(PopularPage, {type: type} , {cssClass: "modal-popular"});
        popularmodal.present();
      }

      loadbetdata(){
          // add some test data
          var laybets = new LayBets;
          laybets.LayBetListArray.push({id: 0, market1: 'Chelsea',market2:'Fulham', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'Chelsea', style:'', partial:false, overunder:''});
          laybets.LayBetListArray.push({id: 0, market1: 'Manchester City',market2:'Norwich', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'Norwich', style:'', partial:false , overunder:''});
          laybets.stake = "0.0030";
          laybets.odds = "3.55";
          laybets.liability = "1000";
          laybets.processed = true;
          laybets.open = false;
          laybets.user=1;
          laybets.matched=true;
          this.betslip.laybetsliparray.push(laybets); 

          laybets = new LayBets;
          laybets.LayBetListArray.push({id: 0, market1: 'Arsenal',market2:'Newcastle United', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'Arsenal', style:'', partial:false, overunder:'' });
          laybets.LayBetListArray.push({id: 0, market1: 'West Ham',market2:'Burnley', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'West Ham', style:'', partial:false, overunder:'' });
          laybets.stake = "0.00123";
          laybets.odds = "2.20";
          laybets.liability = "1000";
          laybets.processed = true;
          laybets.open = false;
          laybets.user=1;
          laybets.matched=true;
          this.betslip.laybetsliparray.push(laybets); 

          var backbets = new BackBets;
          backbets.BackBetListArray.push({id: 0, market1: 'Arsenal',market2:'Newcastle United', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'Arsenal', style:'', partial:false , overunder:''});
          backbets.BackBetListArray.push({id: 0, market1: 'West Ham',market2:'Burnley', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'West Ham', style:'', partial:false , overunder:''});
          backbets.stake = "0.010";
          backbets.odds = "4.01";
          backbets.profit = "1000";
          backbets.processed = true;
          backbets.open = false;
          backbets.user=1;
          backbets.matched=true;
          this.betslip.backbetsliparray.push(backbets);

          // save to storage
          this.storage.set('laybetslips',this.betslip.laybetsliparray);
          this.storage.set('backbetslips',this.betslip.backbetsliparray);

      }

  }


