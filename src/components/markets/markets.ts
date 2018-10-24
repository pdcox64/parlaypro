import { Component } from '@angular/core';
import { EVENTS, SPORTS, MARKETS, MARKETDATES } from '../../globals/mock-events';
import { Sports, Events, Markets, MarketsDates } from '../../globals/globals';

@Component({
  selector: 'markets',
  templateUrl: 'markets.html'
})

export class MarketsComponent {

  events = EVENTS;
  sports = SPORTS;
  markets = MARKETS;
  marketdates = MARKETDATES;

  sportsId = 0;
  eventsId = 0;
  marketId = 0;

  constructor() { }

  onSelect(sport: Sports): void {
    this.sportsId = sport.id;
  }

  onSelectEvent(event: Events): void {
    this.eventsId = event.id;
    // alert(event.event);
  }

  onSelectMarket(market: Markets): void {
    this.marketId = market.id;
    // alert(market.market);
  }
}
