import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { BackBets, LayBets, BetSlip, BetList, Message} from '../../globals/mock-events';


@IonicPage()
@Component({
  selector: 'popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  sport: number;
  betslip= new BetSlip;
  bettype: number = 2;

  // Test Data
  betdata: string[] = ['3.10','3.10','3.09',"3.08"];
  stakedata: string[] = ['0.0045','0.0023','0.0009',"0.0177"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {

    this.sport=0;
    this.bettype =  navParams.get('type');
    this.loadtestdata();
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

  loadtestdata(){

    // Lay data

    // Soccer - EPL
    var laybets = new LayBets;

    laybets.LayBetListArray.push({id: 0, market1: 'Manchester United',market2:'Chelsea', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Chelsea', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Tottenham Hotspur',market2:'Leicester City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Leicester City', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Arsenal',market2:'Manchester City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Arsenal', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Newcastle United',market2:'Liverpool', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Liverpool', style:'', partial:false, overunder:''});
    laybets.stake = "0.0030";
    laybets.odds = "16.00";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 1;
    this.betslip.laybetsliparray.push(laybets);      

    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Bournemouth Town',market2:'Hull City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Hull City', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'West Ham United',market2:'Everton', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Everton', style:'', partial:false, overunder:''});
    laybets.stake = "0.0110";
    laybets.odds = "4.00";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 1;
    this.betslip.laybetsliparray.push(laybets);
    
    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Watford',market2:'Norwich City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Watford', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Cardiff City',market2:'Southampton Town', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Cardiff City', style:'', partial:false, overunder:''});
    laybets.stake = "0.00066";
    laybets.odds = "4.70";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 1;
    this.betslip.laybetsliparray.push(laybets);     

    // Soccer - Serie A
    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Atalanta',market2:'Inter Milan', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Inter Milan', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Chievo',market2:'Bologna', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Bologna', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Sassuolo',market2:'Lazio', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Lazio', style:'', partial:false, overunder:''});
    laybets.stake = "0.00606";
    laybets.odds = "3.20";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 1;
    this.betslip.laybetsliparray.push(laybets);   
    
    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Empoli',market2:'Udinese', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Empoli', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Roma',market2:'Sampdoria', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Roma', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Juventus',market2:'Milan', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Milan', style:'', partial:false, overunder:''});
    laybets.stake = "0.00176";
    laybets.odds = "4.90";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 1;
    this.betslip.laybetsliparray.push(laybets); 


    // football - NFL
    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Arizona Cardinals',market2:'Green Bay Packers', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Green Bay Packers', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Baltimore Ravens',market2:'Houston Texans', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Houston Texans', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Buffalo Bills',market2:'Indianapolis Colts', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Buffalo Bills', style:'', partial:false, overunder:''});
    laybets.stake = "0.00576";
    laybets.odds = "7.00";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 2;
    this.betslip.laybetsliparray.push(laybets); 

    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Carolina Panthers',market2:'Jacksonville Jaguars', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Carolina Panthers', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Chicago Bears',market2:'Kansas City Chiefs', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Chicago Bears', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Cincinnati Bengals',market2:'Los Angeles Chargers', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Los Angeles Chargers', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Cleveland Browns',market2:'Los Angeles Rams', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'', style:'Los Angeles Rams', partial:false, overunder:''});
    laybets.stake = "0.00356";
    laybets.odds = "12.20";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 2;
    this.betslip.laybetsliparray.push(laybets); 

    // Footbal NCAA - AAC
    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Cincinnati Bearcats', market2: 'Conneticut Huskies', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'Conneticut Huskies', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'East Carolina Pirates', market2: 'Houston Cougars', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'Houston Cougars', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Memphis Tigers', market2: 'Navy Midshipmen', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'Memphis Tigers', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'SMU Mustangs', market2: 'South Florida Bulls', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'SMU Mustangs', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Temple Owls', market2: 'Tulane Green Wave', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'Temple Owls', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Tulsa Golden Hurricane', market2: 'UCF Knights', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'UCF Knights', style:'', partial:false, overunder:''});
    laybets.stake = "0.0221";
    laybets.odds = "20.00";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 2;
    this.betslip.laybetsliparray.push(laybets); 

    // Tennis
    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Novak Djokovic', market2: 'Raphael Nadal', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Raphael Nadal', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Roger Federer', market2: 'John isner', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Roger Federer', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Juan Martin del Porto', market2: 'Karen Khachanov', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Juan Martin del Porto', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Alexander Zverev', market2: 'Borna Coric', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Borna Coric', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Kevin Anderson', market2: 'Fabio Fognini', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Kevin Anderson', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Marin Cilic', market2: 'Kyle Edmund', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Kyle Edmund', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Dominic Thiem', market2: 'Milos Raonic', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Milos Raonic', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Kei Nishikori', market2: 'Andrew Murray', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Andrew Murray', style:'', partial:false, overunder:''});
    laybets.stake = "0.0111";
    laybets.odds = "7.03";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 5;
    this.betslip.laybetsliparray.push(laybets); 
  
  
    // baseball



    laybets = new LayBets;
    laybets.LayBetListArray.push({id: 0, market1: 'Toronto Blue Jays',market2:'Chicago White Sox', icon:'baseball', sport: 'Baseball',event: 'MLB', date: 'Wednesday December 11, 2018', winner:'Toronto Blue Jays', style:'', partial:false, overunder:''});
    laybets.LayBetListArray.push({id: 0, market1: 'Boston Red Sox',market2:'Texas Rangers', icon:'baseball', sport: 'Baseball',event: 'MLB', date: 'Wednesday December 11, 2018', winner:'Boston Red Sox', style:'', partial:false, overunder:''});
    laybets.stake = "0.00123";
    laybets.odds = "2.20";
    laybets.liability = "1000";
    laybets.processed = true;
    laybets.user=1;
    laybets.matched=true;
    laybets.sport = 3;
    this.betslip.laybetsliparray.push(laybets); 

   
   
   
   
 // back data
   
    var backbets = new BackBets;
    backbets.BackBetListArray.push({id: 0, market1: 'Arsenal',market2:'Newcastle United', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'Arsenal', style:'', partial:false, overunder:''});
    backbets.BackBetListArray.push({id: 0, market1: 'West Ham',market2:'Burnley', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'West Ham', style:'', partial:false, overunder:''});
    backbets.stake = "0.010";
    backbets.odds = "4.01";
    backbets.profit = "1000";
    backbets.processed = true;
    backbets.user=1;
    backbets.matched=true;
    backbets.sport=1;
    this.betslip.backbetsliparray.push(backbets);

  }

}
