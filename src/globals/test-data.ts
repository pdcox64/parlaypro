
import { BackBets, LayBets, BetSlip} from '../globals/mock-events';
import {Injectable} from '@angular/core';

@Injectable()

export class TestData{

    public betslip = new BetSlip;

    constructor() {

        this.loadtestdata();
      }

      loadtestdata(){

        // Lay data
        var laybets = new LayBets;
    
        // Mixed Sport
        laybets.LayBetListArray.push({id: 0, market1: 'Manchester United',market2:'Chelsea', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Friday October 26, 2018', winner:'Chelsea', style:'', partial:false, overunder:'', won:'true'});
        laybets.LayBetListArray.push({id: 0, market1: 'Tottenham Hotspur',market2:'Leicester City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Friday October 26, 2018', winner:'Leicester City', style:'', partial:false, overunder:'', won:'true'});
        laybets.LayBetListArray.push({id: 0, market1: 'Toronto Blue Jays',market2:'New York Yankees', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Toronto Blue Jays', style:'', partial:false, overunder:'', won:'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Baltimore Ravens',market2:'Houston Texans', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Houston Texans', style:'', partial:false, overunder:'', won:'true'});
        laybets.stake = "0.0030";
        laybets.odds = "16.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 0;
        laybets.open = false;
        this.betslip.laybetsliparray.push(laybets);
    
        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Arizona Cardinals', market2: 'Green Bay Packers', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Arizona Cardinals', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Baltimore Ravens', market2: 'Houston Texans', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Houston Texans', style:'', partial:false, overunder: '',won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Chicago White Sox', market2: 'Boston Red Sox', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Chicago White Sox', style:'', partial:false, overunder: '',won: 'false'});
        laybets.stake = "0.00209"; 
        laybets.odds = "10.00"; 
        laybets.liability = "1000"; 
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Manchester United', market2: 'Chelsea', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Friday October 26, 2018', winner: 'Manchester United', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Arsenal', market2: 'Manchester City', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Friday October 26, 2018', winner: 'Manchester City', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Toronto Blue Jays', market2: 'New York Yankees', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Toronto Blue Jays', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.0770';
        laybets.odds = '14.00';
        laybets.liability = '1.07800';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Arizona Cardinals', market2: 'Green Bay Packers', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Arizona Cardinals', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Roger Federer', market2: 'John isner', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner: 'Roger Federer', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Philadelphia Phillies', market2: 'Chicago Cubs', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Chicago Cubs', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'San Diego Padres', market2: 'Colorado Rockies', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'None', style:'', partial:false, overunder: 'OVER 15.5 Runs', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Boston Celtics', market2: 'New York Knicks', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Boston Celtics', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.0300';
        laybets.odds = '20.00';
        laybets.liability = '0.60000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);
        
        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Charlotte Hornets', market2: 'Indiana Pacers', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Indiana Pacers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Cardiff City', market2: 'Southampton Town', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Southampton Town', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Chelsea', market2: 'West Ham United', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Chelsea', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.11000';
        laybets.odds = '11.5000';
        laybets.liability = '1.26500';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Cincinnati Bearcats', market2: 'Conneticut Huskies', icon: 'american-football', sport: 'Football', event: 'NCAAF - AAC', date: 'Sunday November 28, 2018', winner: 'Cincinnati Bearcats', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'East Carolina Pirates', market2: 'Houston Cougars', icon: 'american-football', sport: 'Football', event: 'NCAAF - AAC', date: 'Sunday November 28, 2018', winner: 'Houston Cougars', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Chievo', market2: 'Bologna', icon: 'football', sport: 'Soccer', event: 'Serie A', date: 'Friday December 6, 2018', winner: 'Chievo', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Manchester United', market2: 'Chelsea', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Friday October 26, 2018', winner: 'Manchester United', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.00990';
        laybets.odds = '18.00';
        laybets.liability = '0.17820';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);
        
        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'L.A Lakers', market2: 'Toronto Raptors', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Toronto Raptors', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Cleveland Cavaliers', market2: 'LA Clippers', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Cleveland Cavaliers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Denver Nuggets', market2: 'Milwaukee Bucks', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Milwaukee Bucks', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'San Diego Padres', market2: 'Colorado Rockies', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Colorado Rockies', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '.3000';
        laybets.odds = '35.00';
        laybets.liability = '10.50000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);
        
        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Simona Halep', market2: 'Daria kasatkina', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Daria kasatkina', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Sloane Stephens', market2: 'Ashleigh Barty', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Sloane Stephens', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'L.A Lakers', market2: 'Toronto Raptors', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'L.A Lakers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.04400';
        laybets.odds = '10.05';
        laybets.liability = '0.44220';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Baylor Bears', market2: 'Iowa State Cyclones', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Baylor Bears', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Kansas Jayhawks', market2: 'Kansas State Wildcats', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'None', style:'', partial:false, overunder: 'OVER 36.5 Points', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'St. Louis Cardinals', market2: 'Miami Marlins', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Miami Marlins', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.086700';
        laybets.odds = '7.50';
        laybets.liability = '0.65025';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);
        
        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Brooklyn Nets', market2: 'Houston Rockets', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Brooklyn Nets', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'L.A Lakers', market2: 'Toronto Raptors', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'L.A Lakers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Newcastle United', market2: 'Liverpool', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Saturday October 27, 2018', winner: 'Liverpool', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.44500';
        laybets.odds = '4.00';
        laybets.liability = '1.78000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 0; 
        this.betslip.laybetsliparray.push(laybets);
    
    
        // Soccer

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Cardiff City', market2: 'Southampton Town', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Cardiff City', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Hull City', market2: 'Newcastle United', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'None', style:'', partial:false, overunder: 'OVER 4.5 Goals', won: 'false'});
        laybets.stake = '0.0087600';
        laybets.odds = '4.00';
        laybets.liability = '0.03504';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 1; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Watford', market2: 'Norwich City', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Watford', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Cardiff City', market2: 'Southampton Town', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Match is a draw', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Chelsea', market2: 'West Ham United', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Chelsea', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Hull City', market2: 'Newcastle United', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Newcastle United', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '2.0000';
        laybets.odds = '8.00';
        laybets.liability = '16.00000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 1; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Manchester United',market2:'Chelsea', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Chelsea', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Tottenham Hotspur',market2:'Leicester City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Leicester City', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Arsenal',market2:'Manchester City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Arsenal', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Newcastle United',market2:'Liverpool', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Liverpool', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.0030";
        laybets.odds = "16.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 1;
        this.betslip.laybetsliparray.push(laybets);      
    
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Bournemouth Town',market2:'Hull City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Hull City', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'West Ham United',market2:'Everton', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Everton', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.0110";
        laybets.odds = "4.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 1;
        this.betslip.laybetsliparray.push(laybets);
        
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Watford',market2:'Norwich City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Watford', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Cardiff City',market2:'Southampton Town', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Cardiff City', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00066";
        laybets.odds = "4.70";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 1;
        this.betslip.laybetsliparray.push(laybets);     
    
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Atalanta',market2:'Inter Milan', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Inter Milan', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Chievo',market2:'Bologna', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Bologna', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Sassuolo',market2:'Lazio', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Lazio', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00606";
        laybets.odds = "3.20";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 1;
        this.betslip.laybetsliparray.push(laybets);   
        
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Empoli',market2:'Udinese', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Empoli', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Roma',market2:'Sampdoria', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Roma', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Juventus',market2:'Milan', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Milan', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00176";
        laybets.odds = "4.90";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 1;
        this.betslip.laybetsliparray.push(laybets);
        
        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Milan', market2: 'Juventus', icon: 'football', sport: 'Soccer', event: 'Serie A', date: 'Friday December 6, 2018', winner: 'Juventus', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Roma', market2: 'Sampdoria', icon: 'football', sport: 'Soccer', event: 'Serie A', date: 'Friday December 6, 2018', winner: 'None', style:'', partial:false, overunder: 'UNDER 5.5 Goals', won: 'false'});
        laybets.stake = '1.0000';
        laybets.odds = '3.00';
        laybets.liability = '3.00000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 1; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Milan', market2: 'Juventus', icon: 'football', sport: 'Soccer', event: 'Serie A', date: 'Friday December 6, 2018', winner: 'Juventus', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Roma', market2: 'Sampdoria', icon: 'football', sport: 'Soccer', event: 'Serie A', date: 'Friday December 6, 2018', winner: 'None', style:'', partial:false, overunder: 'UNDER 5.5 Goals', won: 'false'});
        laybets.stake = '1.0000';
        laybets.odds = '3.00';
        laybets.liability = '3.00000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 1; 
        this.betslip.laybetsliparray.push(laybets);
    
    
        // football
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Arizona Cardinals',market2:'Green Bay Packers', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Green Bay Packers', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Baltimore Ravens',market2:'Houston Texans', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Houston Texans', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Buffalo Bills',market2:'Indianapolis Colts', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Buffalo Bills', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00576";
        laybets.odds = "7.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 2;
        this.betslip.laybetsliparray.push(laybets); 
    
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Carolina Panthers',market2:'Jacksonville Jaguars', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Carolina Panthers', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Chicago Bears',market2:'Kansas City Chiefs', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Chicago Bears', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Cincinnati Bengals',market2:'Los Angeles Chargers', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Los Angeles Chargers', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Cleveland Browns',market2:'Los Angeles Rams', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'', style:'Los Angeles Rams', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00356";
        laybets.odds = "12.20";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 2;
        this.betslip.laybetsliparray.push(laybets); 
    
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Cincinnati Bearcats', market2: 'Conneticut Huskies', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'Conneticut Huskies', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'East Carolina Pirates', market2: 'Houston Cougars', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'Houston Cougars', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Memphis Tigers', market2: 'Navy Midshipmen', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'Memphis Tigers', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'SMU Mustangs', market2: 'South Florida Bulls', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'SMU Mustangs', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Temple Owls', market2: 'Tulane Green Wave', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'Temple Owls', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Tulsa Golden Hurricane', market2: 'UCF Knights', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Sunday November 28, 2018', winner:'UCF Knights', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.0221";
        laybets.odds = "20.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 2;
        this.betslip.laybetsliparray.push(laybets); 

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Kansas Jayhawks', market2: 'Kansas State Wildcats', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Kansas Jayhawks', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Oklahoma Sooners', market2: 'Oklahoma State Cowboys', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Oklahoma Sooners', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'TCU Horned Frogs', market2: 'Texas Longhorns', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Texas Longhorns', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Baylor Bears', market2: 'Iowa State Cyclones', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Iowa State Cyclones', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.0900';
        laybets.odds = '14.00';
        laybets.liability = '1.26000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 2; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Kansas Jayhawks', market2: 'Kansas State Wildcats', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Kansas Jayhawks', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Oklahoma Sooners', market2: 'Oklahoma State Cowboys', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Oklahoma Sooners', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'TCU Horned Frogs', market2: 'Texas Longhorns', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Texas Longhorns', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Baylor Bears', market2: 'Iowa State Cyclones', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Iowa State Cyclones', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.0900';
        laybets.odds = '14.00';
        laybets.liability = '1.26000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 2; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Cincinnati Bearcats', market2: 'Conneticut Huskies', icon: 'american-football', sport: 'Football', event: 'NCAAF - AAC', date: 'Sunday November 28, 2018', winner: 'Cincinnati Bearcats', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'East Carolina Pirates', market2: 'Houston Cougars', icon: 'american-football', sport: 'Football', event: 'NCAAF - AAC', date: 'Sunday November 28, 2018', winner: 'Houston Cougars', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.0900';
        laybets.odds = '3.50';
        laybets.liability = '0.31500';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 2; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Cincinnati Bearcats', market2: 'Conneticut Huskies', icon: 'american-football', sport: 'Football', event: 'NCAAF - AAC', date: 'Sunday November 28, 2018', winner: 'Cincinnati Bearcats', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'East Carolina Pirates', market2: 'Houston Cougars', icon: 'american-football', sport: 'Football', event: 'NCAAF - AAC', date: 'Sunday November 28, 2018', winner: 'Houston Cougars', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.0900';
        laybets.odds = '3.50';
        laybets.liability = '0.31500';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 2; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Arizona Cardinals', market2: 'Green Bay Packers', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Green Bay Packers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Detroit Lions', market2: 'New England Patriots', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'New England Patriots', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.8000';
        laybets.odds = '3.00';
        laybets.liability = '2.40000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 2; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Arizona Cardinals', market2: 'Green Bay Packers', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Green Bay Packers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Detroit Lions', market2: 'New England Patriots', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'New England Patriots', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.8000';
        laybets.odds = '3.00';
        laybets.liability = '2.40000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 2; 
        this.betslip.laybetsliparray.push(laybets);
            
        // Tennis
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Novak Djokovic', market2: 'Raphael Nadal', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Raphael Nadal', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Roger Federer', market2: 'John isner', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Roger Federer', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Juan Martin del Porto', market2: 'Karen Khachanov', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Juan Martin del Porto', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Alexander Zverev', market2: 'Borna Coric', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Borna Coric', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Kevin Anderson', market2: 'Fabio Fognini', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Kevin Anderson', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Marin Cilic', market2: 'Kyle Edmund', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Kyle Edmund', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Dominic Thiem', market2: 'Milos Raonic', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Milos Raonic', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Kei Nishikori', market2: 'Andrew Murray', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Andrew Murray', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.0111";
        laybets.odds = "125.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 5;
        this.betslip.laybetsliparray.push(laybets); 

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Simona Halep', market2: 'Daria kasatkina', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Simona Halep', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Angelique Kerber', market2: 'Aryna Sabalenka', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Aryna Sabalenka', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Elina Svitolina', market2: 'Elise Mertens', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Elise Mertens', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Naomi Osaka', market2: 'Julia Goerges', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Naomi Osaka', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Sloane Stephens', market2: 'Ashleigh Barty', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Sloane Stephens', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.10400';
        laybets.odds = '22.00';
        laybets.liability = '2.28800';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 5; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Simona Halep', market2: 'Daria kasatkina', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Simona Halep', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Angelique Kerber', market2: 'Aryna Sabalenka', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Aryna Sabalenka', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Elina Svitolina', market2: 'Elise Mertens', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Elise Mertens', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Naomi Osaka', market2: 'Julia Goerges', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Naomi Osaka', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Sloane Stephens', market2: 'Ashleigh Barty', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Sloane Stephens', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.10400';
        laybets.odds = '22.00';
        laybets.liability = '2.28800';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 5; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Simona Halep', market2: 'Daria kasatkina', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Simona Halep', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Angelique Kerber', market2: 'Aryna Sabalenka', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Angelique Kerber', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Roger Federer', market2: 'John isner', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner: 'John isner', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Kevin Anderson', market2: 'Fabio Fognini', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner: 'Fabio Fognini', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.04400';
        laybets.odds = '7.00';
        laybets.liability = '0.30800';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 5; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Simona Halep', market2: 'Daria kasatkina', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Simona Halep', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Angelique Kerber', market2: 'Aryna Sabalenka', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Women', date: 'Saturday January 15, 2019', winner: 'Angelique Kerber', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Roger Federer', market2: 'John isner', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner: 'John isner', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Kevin Anderson', market2: 'Fabio Fognini', icon: 'tennisball', sport: 'Tennis', event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner: 'Fabio Fognini', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.04400';
        laybets.odds = '7.00';
        laybets.liability = '0.30800';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 5; 
        this.betslip.laybetsliparray.push(laybets);
              
      
        // baseball
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Toronto Blue Jays',market2:'New York Yankees', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Toronto Blue Jays', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Chicago White Sox',market2:'Boston Red Sox', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Boston Red Sox', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Tampa Bay Rays',market2:'Baltimore Orioles', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Tampa Bay Rays', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00123";
        laybets.odds = "6.20";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 3;
        this.betslip.laybetsliparray.push(laybets); 

        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Toronto Blue Jays',market2:'New York Yankees', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Toronto Blue Jays', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Tampa Bay Rays',market2:'Baltimore Orioles', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Tampa Bay Rays', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00923";
        laybets.odds = "2.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 3;
        this.betslip.laybetsliparray.push(laybets); 

        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Toronto Blue Jays',market2:'New York Yankees', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Toronto Blue Jays', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Oakland Athletics',market2:'Kansas City Royals', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Kansas City Royals', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Tampa Bay Rays',market2:'Baltimore Orioles', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Tampa Bay Rays', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Chicago White Sox',market2:'Boston Red Sox', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Boston Red Sox', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.07623";
        laybets.odds = "10.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 3;
        this.betslip.laybetsliparray.push(laybets); 

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Tampa Bay Rays', market2: 'Baltimore Orioles', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Baltimore Orioles', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Chicago White Sox', market2: 'Boston Red Sox', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Chicago White Sox', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Toronto Blue Jays', market2: 'New York Yankees', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Toronto Blue Jays', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.0440';
        laybets.odds = '7.60';
        laybets.liability = '0.33440';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 3; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Tampa Bay Rays', market2: 'Baltimore Orioles', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Baltimore Orioles', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Chicago White Sox', market2: 'Boston Red Sox', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Chicago White Sox', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Toronto Blue Jays', market2: 'New York Yankees', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Toronto Blue Jays', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.0440';
        laybets.odds = '7.60';
        laybets.liability = '0.33440';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 3; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Milwaukee Brewers', market2: 'Arizona Diamondbacks', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Arizona Diamondbacks', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Philadelphia Phillies', market2: 'Chicago Cubs', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'None', style:'', partial:false, overunder: 'UNDER 25.5 Runs', won: 'false'});
        laybets.stake = '0.5000';
        laybets.odds = '3.60';
        laybets.liability = '1.80000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 3; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Milwaukee Brewers', market2: 'Arizona Diamondbacks', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Milwaukee Brewers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'New York Mets', market2: 'Atlanta Braves', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Atlanta Braves', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Philadelphia Phillies', market2: 'Chicago Cubs', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Chicago Cubs', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'San Diego Padres', market2: 'Colorado Rockies', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Colorado Rockies', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'San Francisco Giants', market2: 'Los Angeles Dodngers', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'San Francisco Giants', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'St. Louis Cardinals', market2: 'Miami Marlins', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'St. Louis Cardinals', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.099900';
        laybets.odds = '35.00';
        laybets.liability = '3.49650';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 3; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Philadelphia Phillies', market2: 'Chicago Cubs', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Philadelphia Phillies', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'San Diego Padres', market2: 'Colorado Rockies', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'Colorado Rockies', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'San Francisco Giants', market2: 'Los Angeles Dodngers', icon: 'baseball', sport: 'Baseball', event: 'MLB - National League', date: 'Wednesday March 30, 2019', winner: 'None', style:'', partial:false, overunder: 'UNDER 15.5 Runs', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Oakland Athletics', market2: 'Kansas City Royals', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Oakland Athletics', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Texas Rangers', market2: 'Cleveland Indians', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Cleveland Indians', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.006700';
        laybets.odds = '24.00';
        laybets.liability = '0.16080';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 3; 
        this.betslip.laybetsliparray.push(laybets);

    
       // Basketball
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0,  market1: 'Brooklyn Nets', market2: 'Houston Rockets', icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'Houston Rockets', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Charlotte Hornets', market2: 'Indiana Pacers', icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'Charlotte Hornets', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Cleveland Cavaliers', market2: 'LA Clippers',icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'LA Clippers', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Dallas Mavericks', market2: 'Memphis Grizzlies', icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'Memphis Grizzlies', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Denver Nuggets', market2: 'Milwaukee Bucks', icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'Denver Nuggets', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Detroit Pistons', market2: 'New Orleans Pelicans',icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'Detroit Pistons', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00179";
        laybets.odds = "100.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 4;
        this.betslip.laybetsliparray.push(laybets); 
    
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0,  market1: 'Brooklyn Nets', market2: 'Houston Rockets', icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'Houston Rockets', style:'', partial:false, overunder:'', won: 'false'});
        laybets.LayBetListArray.push({id: 0,  market1: 'Brooklyn Nets', market2: 'Houston Rockets', icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'', style:'', partial:false, overunder:'OVER/UNDER 10.5 Points', won: 'false'});
        laybets.stake = "0.00209";
        laybets.odds = "10.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 4;
        this.betslip.laybetsliparray.push(laybets); 
    
        laybets = new LayBets;
        laybets.LayBetListArray.push({id: 0, market1: 'Dallas Mavericks', market2: 'Memphis Grizzlies', icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'', style:'', partial:false, overunder:'OVER/UNDER 5.5 Points', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Denver Nuggets', market2: 'Milwaukee Bucks', icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'', style:'', partial:false, overunder:'OVER/UNDER 10.5 Points', won: 'false'});
        laybets.LayBetListArray.push({id: 0, market1: 'Detroit Pistons', market2: 'New Orleans Pelicans',icon:'basketball', sport: 'Basketball',event: 'NBA', date: 'Wednesday December 4, 2018', winner:'Detroit Pistons', style:'', partial:false, overunder:'', won: 'false'});
        laybets.stake = "0.00209";
        laybets.odds = "10.00";
        laybets.liability = "1000";
        laybets.processed = true;
        laybets.user=1;
        laybets.matched=true;
        laybets.sport = 4;
        this.betslip.laybetsliparray.push(laybets); 

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Chicago Bulls', market2: 'Miami Heat', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Chicago Bulls', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Atlanta Hawks', market2: 'Golden State Warriors', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Golden State Warriors', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Brooklyn Nets', market2: 'Houston Rockets', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'None', style:'', partial:false, overunder: 'UNDER 210.5 Points', won: 'false'});
        laybets.stake = '0.09900';
        laybets.odds = '17.00';
        laybets.liability = '1.68300';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 4; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'L.A Lakers', market2: 'Toronto Raptors', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'L.A Lakers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Boston Celtics', market2: 'New York Knicks', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'New York Knicks', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Atlanta Hawks', market2: 'Golden State Warriors', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Golden State Warriors', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Brooklyn Nets', market2: 'Houston Rockets', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Houston Rockets', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Charlotte Hornets', market2: 'Indiana Pacers', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Indiana Pacers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Cleveland Cavaliers', market2: 'LA Clippers', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Cleveland Cavaliers', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Dallas Mavericks', market2: 'Memphis Grizzlies', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Dallas Mavericks', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Denver Nuggets', market2: 'Milwaukee Bucks', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Denver Nuggets', style:'', partial:false, overunder: '', won: 'false'});
        laybets.stake = '0.006600';
        laybets.odds = '140.00';
        laybets.liability = '0.92400';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 4; 
        this.betslip.laybetsliparray.push(laybets);

        laybets = new LayBets;
        this.betslip.laybetsliparray.push(laybets);laybets = new LayBets;
        laybets.LayBetListArray.push({id:0, market1: 'Brooklyn Nets', market2: 'Houston Rockets', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'Brooklyn Nets', style:'', partial:false, overunder: '', won: 'false'});
        laybets.LayBetListArray.push({id:0, market1: 'Charlotte Hornets', market2: 'Indiana Pacers', icon: 'basketball', sport: 'Basketball', event: 'NBA', date: 'Wednesday December 4, 2018', winner: 'None', style:'', partial:false, overunder: 'OVER 200.5 Points', won: 'false'});
        laybets.stake = '0.3300';
        laybets.odds = '4.00';
        laybets.liability = '1.32000';
        laybets.processed = true; 
        laybets.user=1; 
        laybets.matched=true; 
        laybets.sport = 4; 
        this.betslip.laybetsliparray.push(laybets);

         
        // back data
        var backbets = new BackBets;

        // Mixed Sport
        backbets.BackBetListArray.push({id: 0, market1: 'Manchester United',market2:'Chelsea', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Chelsea', style:'', partial:false, overunder:'', won: 'true'});
        backbets.BackBetListArray.push({id: 0, market1: 'Tottenham Hotspur',market2:'Leicester City', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Sunday December 8, 2018', winner:'Leicester City', style:'', partial:false, overunder:'', won: 'true'});
        backbets.BackBetListArray.push({id: 0, market1: 'Toronto Blue Jays',market2:'New York Yankees', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Toronto Blue Jays', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'Baltimore Ravens',market2:'Houston Texans', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Houston Texans', style:'', partial:false, overunder:'', won: 'false'});
        backbets.stake = "0.0030";
        backbets.odds = "16.00";
        backbets.profit = "1000";
        backbets.processed = true;
        backbets.user=1;
        backbets.matched=true;
        backbets.sport = 0;
        backbets.open = false;
        this.betslip.backbetsliparray.push(backbets);  
    
        backbets = new BackBets;
        backbets.BackBetListArray.push({id: 0, market1: 'Atalanta',market2:'Inter Milan', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Inter Milan', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'Chievo',market2:'Bologna', icon:'football', sport: 'Soccer',event: 'Serie A', date: 'Friday December 6, 2018', winner:'Bologna', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'Cincinnati Bengals',market2:'Los Angeles Chargers', icon:'american-football', sport: 'Football',event: 'NFL', date: 'Saturday December 6, 2018', winner:'Los Angeles Chargers', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'Roger Federer', market2: 'John isner', icon:'tennisball', sport: 'Tennis',event: 'Australian Open First Round - Men', date: 'Friday January 14, 2019', winner:'Roger Federer', style:'', partial:false, overunder:'', won: 'false'});
        backbets.stake = "0.01240";
        backbets.odds = "18.00";
        backbets.profit = "1000";
        backbets.processed = true;
        backbets.user=1;
        backbets.matched=true;
        backbets.sport = 0;
        this.betslip.backbetsliparray.push(backbets);

        backbets = new BackBets;
        backbets.BackBetListArray.push({id:0, market1: 'Carolina Panthers', market2: 'Jacksonville Jaguars', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Jacksonville Jaguars', style:'', partial:false, overunder: '', won: 'false'});
        backbets.BackBetListArray.push({id:0, market1: 'Cincinnati Bengals', market2: 'Los Angeles Chargers', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'None', style:'', partial:false, overunder: 'UNDER 36.5 Points', won: 'false'});
        backbets.BackBetListArray.push({id:0, market1: 'Toronto Blue Jays', market2: 'New York Yankees', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Toronto Blue Jays', style:'', partial:false, overunder: '', won: 'false'});
        backbets.BackBetListArray.push({id:0, market1: 'Texas Rangers', market2: 'Cleveland Indians', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Texas Rangers', style:'', partial:false, overunder: '', won: 'false'});
        backbets.stake = '0.03300';
        backbets.odds = '24.00';
        backbets.profit = '0.75900';
        backbets.processed = true; 
        backbets.user=1; 
        backbets.matched=true; 
        backbets.sport = 0; 
        this.betslip.backbetsliparray.push(backbets);

     // soccer EPL
        backbets = new BackBets;
        backbets.BackBetListArray.push({id: 0, market1: 'Arsenal',market2:'Newcastle United', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'Arsenal', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'West Ham',market2:'Burnley', icon:'football', sport: 'Soccer',event: 'English Premier League', date: 'Wednesday December 4, 2018', winner:'West Ham', style:'', partial:false, overunder:'', won: 'false'});
        backbets.stake = "0.010";
        backbets.odds = "4.01";
        backbets.profit = "1000";
        backbets.processed = true;
        backbets.user=1;
        backbets.matched=true;
        backbets.sport=1;
        this.betslip.backbetsliparray.push(backbets);

        backbets = new BackBets;
        backbets.BackBetListArray.push({id:0, market1: 'Manchester United', market2: 'Chelsea', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Chelsea', style:'', partial:false, overunder: '', won: 'true'});
        backbets.BackBetListArray.push({id:0, market1: 'Tottenham Hotspur', market2: 'Leicester City', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Leicester City', style:'', partial:false, overunder: '', won: 'true'});
        backbets.BackBetListArray.push({id:0, market1: 'Toronto Blue Jays', market2: 'New York Yankees', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Toronto Blue Jays', style:'', partial:false, overunder: '', won: 'false'});
        backbets.BackBetListArray.push({id:0, market1: 'Baltimore Ravens', market2: 'Houston Texans', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Houston Texans', style:'', partial:false, overunder: '', won: 'false'});
        backbets.stake = '0.0030';
        backbets.odds = '16.00';
        backbets.profit = '1000';
        backbets.processed = true; 
        backbets.user=1; 
        backbets.matched=true; 
        backbets.sport = 1; 
        this.betslip.backbetsliparray.push(backbets);

        backbets = new BackBets;
        backbets.BackBetListArray.push({id:0, market1: 'Manchester United', market2: 'Chelsea', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Friday October 26, 2018', winner: 'Manchester United', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
        backbets.BackBetListArray.push({id:0, market1: 'Tottenham Hostspur', market2: 'Leicester City', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Friday October 26, 2018', winner: 'Tottenham Hostspur', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
        backbets.stake = '0.4000';
        backbets.odds = '2.80';
        backbets.profit = '0.72000';
        backbets.processed = true; 
        backbets.user=1; 
        backbets.matched=true; 
        backbets.sport = 1; 
        this.betslip.backbetsliparray.push(backbets);

        backbets = new BackBets;
        backbets.BackBetListArray.push({id:0, market1: 'Watford', market2: 'Norwich City', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Watford', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
        backbets.BackBetListArray.push({id:0, market1: 'Cardiff City', market2: 'Southampton Town', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Southampton Town', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
        backbets.BackBetListArray.push({id:0, market1: 'Chelsea', market2: 'West Ham United', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Chelsea', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
        backbets.BackBetListArray.push({id:0, market1: 'Aresenal', market2: 'Bournemouth Town', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Bournemouth Town', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
        backbets.BackBetListArray.push({id:0, market1: 'Hull City', market2: 'Newcastle United', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'None', style:'', partial:false, overunder: 'OVER 0.5 Goals', won: 'undefined'});
        backbets.stake = '0.07500';
        backbets.odds = '24.00';
        backbets.profit = '1.72500';
        backbets.processed = true; 
        backbets.user=1; 
        backbets.matched=true; 
        backbets.sport = 1; 
        this.betslip.backbetsliparray.push(backbets);

      // MLB - American League
        backbets = new BackBets;
        backbets.BackBetListArray.push({id: 0, market1: 'Toronto Blue Jays',market2:'New York Yankees', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Toronto Blue Jays', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'Tampa Bay Rays',market2:'Baltimore Orioles', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Tampa Bay Rays', style:'', partial:false, overunder:'', won: 'false'});
        backbets.stake = "0.00923";
        backbets.odds = "2.00";
        backbets.profit = "1000";
        backbets.processed = true;
        backbets.user=1;
        backbets.matched=true;
        backbets.sport = 3;
        this.betslip.backbetsliparray.push(backbets);

        backbets = new BackBets;
        backbets.BackBetListArray.push({id: 0, market1: 'Toronto Blue Jays',market2:'New York Yankees', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Toronto Blue Jays', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'Oakland Athletics',market2:'Kansas City Royals', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Kansas City Royals', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'Tampa Bay Rays',market2:'Baltimore Orioles', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Tampa Bay Rays', style:'', partial:false, overunder:'', won: 'false'});
        backbets.BackBetListArray.push({id: 0, market1: 'Chicago White Sox',market2:'Boston Red Sox', icon:'baseball', sport: 'Baseball',event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner:'Boston Red Sox', style:'', partial:false, overunder:'', won: 'false'});
        backbets.stake = "0.07623";
        backbets.odds = "10.00";
        backbets.profit = "1000";
        backbets.processed = true;
        backbets.user=1;
        backbets.matched=true;
        backbets.sport = 3;
        this.betslip.backbetsliparray.push(backbets); 

backbets = new BackBets;
backbets.BackBetListArray.push({id:0, market1: 'Manchester United', market2: 'Chelsea', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Chelsea', style:'', partial:false, overunder: '', won: 'true'});
backbets.BackBetListArray.push({id:0, market1: 'Tottenham Hotspur', market2: 'Leicester City', icon: 'football', sport: 'Soccer', event: 'English Premier League', date: 'Sunday December 8, 2018', winner: 'Leicester City', style:'', partial:false, overunder: '', won: 'true'});
backbets.BackBetListArray.push({id:0, market1: 'Toronto Blue Jays', market2: 'New York Yankees', icon: 'baseball', sport: 'Baseball', event: 'MLB - American League', date: 'Wednesday March 30, 2019', winner: 'Toronto Blue Jays', style:'', partial:false, overunder: '', won: 'false'});
backbets.BackBetListArray.push({id:0, market1: 'Baltimore Ravens', market2: 'Houston Texans', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Houston Texans', style:'', partial:false, overunder: '', won: 'false'});
backbets.stake = '0.0030';
backbets.odds = '16.00';
backbets.profit = '1000';
backbets.processed = true; 
backbets.user=1; 
backbets.matched=true; 
backbets.sport = 2; 
this.betslip.backbetsliparray.push(backbets);

backbets = new BackBets;
backbets.BackBetListArray.push({id:0, market1: 'Arizona Cardinals', market2: 'Green Bay Packers', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Arizona Cardinals', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
backbets.BackBetListArray.push({id:0, market1: 'Baltimore Ravens', market2: 'Houston Texans', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Houston Texans', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
backbets.BackBetListArray.push({id:0, market1: 'Carolina Panthers', market2: 'Jacksonville Jaguars', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Carolina Panthers', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
backbets.BackBetListArray.push({id:0, market1: 'Cleveland Browns', market2: 'Los Angeles Rams', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'Cleveland Browns', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
backbets.BackBetListArray.push({id:0, market1: 'Denver Broncos', market2: 'Minnesota Vikings', icon: 'american-football', sport: 'Football', event: 'NFL', date: 'Saturday December 6, 2018', winner: 'None', style:'', partial:false, overunder: 'OVER 26.5 Points', won: 'undefined'});
backbets.stake = '0.03450';
backbets.odds = '40.00';
backbets.profit = '1.34550';
backbets.processed = true; 
backbets.user=1; 
backbets.matched=true; 
backbets.sport = 2; 
this.betslip.backbetsliparray.push(backbets);

backbets = new BackBets;
backbets.BackBetListArray.push({id:0, market1: 'Kansas Jayhawks', market2: 'Kansas State Wildcats', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Kansas Jayhawks', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
backbets.BackBetListArray.push({id:0, market1: 'Oklahoma Sooners', market2: 'Oklahoma State Cowboys', icon: 'american-football', sport: 'Football', event: 'NCAAF - BIG 12', date: 'Friday December 6, 2018', winner: 'Oklahoma State Cowboys', style:'', partial:false, overunder: 'undefined', won: 'undefined'});
backbets.stake = '0.9900';
backbets.odds = '3.00';
backbets.profit = '1.98000';
backbets.processed = true; 
backbets.user=1; 
backbets.matched=true; 
backbets.sport = 2; 
this.betslip.backbetsliparray.push(backbets);
    
      }

}

