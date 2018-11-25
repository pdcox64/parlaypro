import { Component } from '@angular/core';
import { SPORTEVENTS, SPORTS, MARKETS, MARKETDATES, BETWIN } from '../../globals/mock-events';
import { Sports, SportEvents, Markets, MarketsDates, BetWin } from '../../globals/globals';
import { Events } from'ionic-angular';

@Component({
  selector: 'markets',
  templateUrl: 'markets.html'
})

export class MarketsComponent {

  sportevents = SPORTEVENTS;
  sports = SPORTS;
  markets = MARKETS;
  marketdates = MARKETDATES;
  betwins = BETWIN;
  winner = '';
  thissportlist=0;
  thiseventlist=0;
  thismarketlist=0;
  thisoverunder='';

  sportsId = 0;
  eventsId = 0;
  marketId = 0;
 
  constructor(public events: Events) { 
     console.log(this.sports);
  }

 getWinner(winnertype, market){
    switch(winnertype) { 
      case 'Home': { 
        this.winner = market.market1 ;
        break; 
      } 
      case 'Away': { 
        this.winner = market.market2 ;
        break; 
      } 
      case '[Player1]': { 
        this.winner = market.market1;
        break; 
        } 
      case '[Player2]': { 
        this.winner = market.market2;
        break; 
      } 
      case 'Draw': { 
        this.winner = "Draw";
        break; 
      } 
    } 
    return this.winner;
 }

 setRange(sport: Sports, range: string, type: number){

    var retrange: string;

    if(type==1){
        retrange = "OVER " + range + " " +sport.overunder.type;
    }
    else
    {
      retrange = "UNDER " + range + " " +sport.overunder.type;
    }
    return retrange;

 }

  addMatch(sport: Sports, event: SportEvents, market: Markets, marketdate: MarketsDates, betwin: BetWin, range: string){
    
    var overunder:string;

    if(range != '') // Over/Under Bet
    {
      overunder = range;
      this.winner = 'None';
    }
    else // Moneyline Bet
    {
      this.winner = this.getWinner(betwin.win,market)
      if( this.winner == 'Draw') 
      {
          this.winner = 'Match is a draw';
      }
    }
    this.events.publish('market',sport, event, market, marketdate.date, this.winner, overunder);
  }

  onSelect(sport: Sports): void {
    this.sportsId = sport.id;
  }

  onSelectEvent(event: SportEvents): void {
    this.eventsId = event.id;
  }

  onSelectMarket(market: Markets): void {
    this.marketId = market.id;
  }

  setsport(id: number): void{
    this.thissportlist=id; 
  }

  setevent(id: number): void{
    this.thiseventlist=id; 
  }

  setmarket(id: number): void{
    this.thismarketlist=id; 
  }

  setoverunder(range: string): void{
    this.thisoverunder = range;
  }

}
