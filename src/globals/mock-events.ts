import {Sports} from '../globals/globals';
import {Events} from '../globals/globals';
import {Markets} from '../globals/globals';
import {MarketsDates} from '../globals/globals';

export const SPORTS: Sports[] = [
    {id: 1, sport: 'Football'},
    {id: 2, sport: 'Hockey'},
    {id: 3, sport: 'Baseball'},
    {id: 4, sport: 'Basketball'},
    {id: 5, sport: 'Soccer'},
];

export const EVENTS: Events[] = [
    {id: 1, event: 'NFL', sport: 1},
    {id: 2, event: 'English Premier League', sport: 5},
    {id: 3, event: 'Serie A', sport: 5},
];

export const MARKETDATES: MarketsDates[] = [
    {id: 1, event: 2, date: 'Friday October 26, 2018'},
    {id: 2, event: 2, date: 'Saturday October 27, 2018'},
    {id: 3, event: 2, date: 'Sunday October 28, 2018'},
];

export const MARKETS: Markets[] = [
    {id: 1, market: 'Manchester United v Chelsea', event: 2, date: 1},
    {id: 2, market: 'Tottenham Hostspur v Leicester City', event: 2, date: 1},
    {id: 3, market: 'Arsenal v Manchester City', event: 2, date: 1},
    {id: 4, market: 'Newcastle United v Liverpool', event: 2, date: 2},
    {id: 5, market: 'Bournemouth Town v Hull City', event: 2, date: 2},
    {id: 6, market: 'West Hame United v Everton', event: 2, date: 2},
    {id: 7, market: 'Watford v Norwich City', event: 2, date: 3},
    {id: 8, market: 'Cardiff City v Southampton Town', event: 2, date: 3},
];
