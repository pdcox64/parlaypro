import {Sports, OverUnder, SportEvents, Markets, MarketsDates, BetWin} from '../globals/globals';


/************************
 
Betslip => laybetsliparray: LayBets[] => laybetlistarray: BetList[] =>
Betslip => backbetsliparray: BackBets[] => backbetlistarray: BetList[] =>
 
 **************************/

export class BetList{
    
    id: number;
    market1: string;
    market2: string;
    icon: string;
    sport: string;
    event: string;
    date: string;
    winner: string;
    style: string;
    partial: boolean;
    overunder: string;
}

export class LayBets{
    LayBetListArray: BetList[] = new Array();
    stake: string;
    odds: string;
    liability: string;
    processed: boolean;
    matched: boolean;
    open: boolean;
    user: number;
    sport: number;
}

export class BackBets{
    BackBetListArray: BetList[] = new Array();
    stake: string;
    odds: string;
    profit: string;
    processed: boolean;
    matched: boolean;
    open: boolean;
    user: number;
    sport: number;
}

export class SearchBets{
    SearchListArray: BetList[] = new Array();
}

export class BetSlip{
    id: number;
    laybetsliparray: LayBets[] = new Array();
    backbetsliparray: BackBets[] = new Array();  
}

export const BETWIN: BetWin[] = [
    {id: 1, sport: 5, win: 'Home'},
    {id: 2, sport: 5, win: 'Away'},
    {id: 3, sport: 5, win: 'Draw'},
    {id: 4, sport: 1, win: 'Home'},
    {id: 5, sport: 1, win: 'Away'},
    {id: 6, sport: 2, win: '[Player1]'},
    {id: 7, sport: 2, win: '[Player2]'},
    {id: 8, sport: 3, win: 'Home'},
    {id: 9, sport: 3, win: 'Away'},
    {id: 10, sport: 4, win: 'Home'},
    {id: 11, sport: 4, win: 'Away'},
];


export const OVER_UNDER: OverUnder[] = [
    {id: 1, range: ['1.5','6.5','11.5','16.5','21.5'], type:'Points'},
    {id: 2, range: ['0'], type:'None'},
    {id: 3, range: ['0.5','2.5','4.5','6.5','8.5'], type:'Runs'},
    {id: 4, range: ['5.5','10.5','15.5','20.5','25.5'], type:'Points'},
    {id: 5, range: ['0.5','1.5','2.5','3.5','4.5', '5.5', '6.5'], type:'Goals'},
];

export const SPORTS: Sports[] = [
    {id: 1, sport: 'Football', icon:'american-football', overunder: OVER_UNDER[0]},
    {id: 2, sport: 'Tennis', icon:'tennisball', overunder: OVER_UNDER[1]},
    {id: 3, sport: 'Baseball', icon:'baseball', overunder: OVER_UNDER[2]},
    {id: 4, sport: 'Basketball', icon:'basketball', overunder: OVER_UNDER[3]},
    {id: 5, sport: 'Soccer', icon:'football', overunder: OVER_UNDER[4]},
];


export const SPORTEVENTS: SportEvents[] = [
    {id: 1, event: 'NFL', sport: 1},
    {id: 2, event: 'English Premier League', sport: 5},
    {id: 3, event: 'Serie A', sport: 5},
    {id: 4, event: 'Australian Open First Round - Men', sport: 2},
    {id: 5, event: 'NCAAF - AAC', sport: 1},
    {id: 6, event: 'Australian Open First Round - Women', sport: 2},
    {id: 7, event: 'MLB - American League', sport: 3},
    {id: 8, event: 'NBA', sport: 4},
    {id: 9, event: 'NCAAF - BIG 12', sport: 1},
    {id: 10, event: 'MLB - National League', sport: 3},
];

export const MARKETDATES: MarketsDates[] = [
    {id: 1, event: 2, date: 'Friday October 26, 2018'},
    {id: 2, event: 2, date: 'Saturday October 27, 2018'},
    {id: 3, event: 2, date: 'Sunday December 8, 2018'},
    {id: 4, event: 1, date: 'Saturday December 6, 2018'},
    {id: 5, event: 4, date: 'Friday January 14, 2019'},
    {id: 6, event: 5, date: 'Sunday November 28, 2018'},
    {id: 7, event: 6, date: 'Saturday January 15, 2019'},
    {id: 8, event: 7, date: 'Wednesday March 30, 2019'},
    {id: 9, event: 8, date: 'Wednesday December 4, 2018'},
    {id: 10, event: 3, date: 'Friday December 6, 2018'},
    {id: 11, event: 9, date: 'Friday December 6, 2018'},
    {id: 12, event: 10, date: 'Wednesday March 30, 2019'},
];

export const MARKETS: Markets[] = [

    // Soccer EPL
    {id: 1, market1: 'Manchester United', market2: 'Chelsea', event: 2, date: 1 },
    {id: 2, market1: 'Tottenham Hostspur', market2: 'Leicester City', event: 2, date: 1 },
    {id: 3, market1: 'Arsenal', market2: 'Manchester City', event: 2, date: 1 },
    {id: 4, market1: 'Newcastle United', market2: 'Liverpool', event: 2, date: 2 },
    {id: 5, market1: 'Bournemouth Town', market2: 'Hull City', event: 2, date: 2 },
    {id: 6, market1: 'West Ham United', market2: 'Everton', event: 2, date: 2 },
    {id: 7, market1: 'Watford', market2: 'Norwich City', event: 2, date: 3 },
    {id: 8, market1: 'Cardiff City', market2: 'Southampton Town', event: 2, date: 3 },
    {id: 9, market1: 'Chelsea', market2: 'West Ham United', event: 2, date: 3 },
    {id: 10, market1: 'Aresenal', market2: 'Bournemouth Town', event: 2, date: 3 },
    {id: 11, market1: 'Hull City', market2: 'Newcastle United', event: 2, date: 3 },
    {id: 12, market1: 'Manchetser City', market2: 'Southampton Town', event: 2, date: 3 },
    {id: 13, market1: 'Leicester City', market2: 'Liverpool', event: 2, date: 3 },

    // Soccer Serie A
    {id: 14, market1: 'Atalanta', market2: 'Inter Milan', event: 3, date: 10 },
    {id: 15, market1: 'Chievo', market2: 'Bologna', event: 3, date: 10 },
    {id: 16, market1: 'Sassuolo', market2: 'Lazio', event: 3, date: 10 },
    {id: 17, market1: 'Empoli', market2: 'Udinese', event: 3, date: 10 },
    {id: 18, market1: 'Roma', market2: 'Sampdoria', event: 3, date: 10 },
    {id: 19, market1: 'Milan', market2: 'Juventus', event: 3, date: 10 },

    // Football NFL
    {id: 20, market1: 'Arizona Cardinals', market2: 'Green Bay Packers', event: 1, date: 4 },
    {id: 12, market1: 'Baltimore Ravens', market2: 'Houston Texans', event: 1, date: 4 },
    {id: 22, market1: 'Buffalo Bills', market2: 'Indianapolis Colts', event: 1, date: 4 },
    {id: 23, market1: 'Carolina Panthers', market2: 'Jacksonville Jaguars', event: 1, date: 4 },
    {id: 24, market1: 'Chicago Bears', market2: 'Kansas City Chiefs', event: 1, date: 4 },
    {id: 25, market1: 'Cincinnati Bengals', market2: 'Los Angeles Chargers', event: 1, date: 4 },
    {id: 26, market1: 'Cleveland Browns', market2: 'Los Angeles Rams', event: 1, date: 4 },
    {id: 27, market1: 'Dallas Cowboys', market2: 'Miami Dolphins', event: 1, date: 4 },
    {id: 28, market1: 'Denver Broncos', market2: 'Minnesota Vikings', event: 1, date: 4 },
    {id: 29, market1: 'Detroit Lions', market2: 'New England Patriots', event: 1, date: 4 },

    // Footbal NCAA - AAC
    {id: 30, market1: 'Cincinnati Bearcats', market2: 'Conneticut Huskies', event: 5, date: 6 },
    {id: 31, market1: 'East Carolina Pirates', market2: 'Houston Cougars', event: 5, date: 6 },
    {id: 32, market1: 'Memphis Tigers', market2: 'Navy Midshipmen', event: 5, date: 6 },
    {id: 33, market1: 'SMU Mustangs', market2: 'South Florida Bulls', event: 5, date: 6 },
    {id: 34, market1: 'Temple Owls', market2: 'Tulane Green Wave', event: 5, date: 6 },
    {id: 35, market1: 'Tulsa Golden Hurricane', market2: 'UCF Knights', event: 5, date: 6 },

    // Footbal NCAA - Big 12
    {id: 36, market1: 'Baylor Bears', market2: 'Iowa State Cyclones', event: 9, date: 11 },
    {id: 37, market1: 'Kansas Jayhawks', market2: 'Kansas State Wildcats', event: 9, date: 11 },
    {id: 38, market1: 'Oklahoma Sooners', market2: 'Oklahoma State Cowboys', event: 9, date: 11 },
    {id: 39, market1: 'TCU Horned Frogs', market2: 'Texas Longhorns', event: 9, date: 11 },
    {id: 40, market1: 'Texas Tech Red Raiders', market2: 'West Virginia Mountaineers', event: 9, date: 11 },
  
    // Tennis Australian Open - Men
    {id: 41, market1: 'Novak Djokovic', market2: 'Raphael Nadal', event: 4, date: 5 },
    {id: 42, market1: 'Roger Federer', market2: 'John isner', event: 4, date: 5 },
    {id: 43, market1: 'Juan Martin del Porto', market2: 'Karen Khachanov', event: 4, date: 5 },
    {id: 44, market1: 'Alexander Zverev', market2: 'Borna Coric', event: 4, date: 5 },
    {id: 45, market1: 'Kevin Anderson', market2: 'Fabio Fognini', event: 4, date: 5 },
    {id: 46, market1: 'Marin Cilic', market2: 'Kyle Edmund', event: 4, date: 5 },
    {id: 47, market1: 'Dominic Thiem', market2: 'Milos Raonic', event: 4, date: 5 },
    {id: 48, market1: 'Kei Nishikori', market2: 'Andrew Murray', event: 4, date: 5 },

    // Tennis Australian Open - Women
    {id: 49, market1: 'Simona Halep', market2: 'Daria kasatkina', event: 6, date: 7 },
    {id: 50, market1: 'Angelique Kerber', market2: 'Aryna Sabalenka', event: 6, date: 7 },
    {id: 51, market1: 'Caroline Wozniacki', market2: 'Anastasija Sevastova', event: 6, date: 7 },
    {id: 52, market1: 'Elina Svitolina', market2: 'Elise Mertens', event: 6, date: 7 },
    {id: 53, market1: 'Naomi Osaka', market2: 'Julia Goerges', event: 6, date: 7 },
    {id: 54, market1: 'Sloane Stephens', market2: 'Ashleigh Barty', event: 6, date: 7 },
    {id: 55, market1: 'Petra Kvitova', market2: 'Serena Williams', event: 6, date: 7 },
    {id: 56, market1: 'Karolina Pliskova', market2: 'Madison Keys', event: 6, date: 7 },
    {id: 57, market1: 'Kiki Bertens', market2: 'Garbine Muguruza', event: 6, date: 7 },

    // MLB American league
    
    {id: 58, market1: 'Toronto Blue Jays', market2: 'New York Yankees', event: 7, date: 8 },
    {id: 59, market1: 'Chicago White Sox', market2: 'Boston Red Sox', event: 7, date: 8 },
    {id: 60, market1: 'Tampa Bay Rays', market2: 'Baltimore Orioles', event: 7, date: 8 },
    {id: 61, market1: 'Texas Rangers', market2: 'Cleveland Indians', event: 7, date: 8 },
    {id: 62, market1: 'Minnesota Twins', market2: 'Detroit Tigers', event: 7, date: 8 },
    {id: 63, market1: 'Los Angeles Angels', market2: 'Houston Astros', event: 7, date: 8 },
    {id: 64, market1: 'Oakland Athletics', market2: 'Kansas City Royals', event: 7, date: 8 },
    {id: 65, market1: 'Minnesota Twins', market2: 'Seattle Mariners', event: 7, date: 8 },
    
    
    // MLB National League
    {id: 66, market1: 'Milwaukee Brewers', market2: 'Arizona Diamondbacks', event: 10, date: 12 },
    {id: 67, market1: 'New York Mets', market2: 'Atlanta Braves', event: 10, date: 12 },
    {id: 68, market1: 'Philadelphia Phillies', market2: 'Chicago Cubs', event: 10, date: 12 },
    {id: 69, market1: 'Pittsburgh Pirates', market2: 'Cincinnati reds', event: 10, date: 12 },
    {id: 70, market1: 'San Diego Padres', market2: 'Colorado Rockies', event: 10, date: 12 },
    {id: 71, market1: 'San Francisco Giants', market2: 'Los Angeles Dodngers', event: 10, date: 12 },
    {id: 72, market1: 'St. Louis Cardinals', market2: 'Miami Marlins', event: 10, date: 12 },
     
    // Basketball - NBA 
    {id: 73, market1: 'L.A Lakers', market2: 'Toronto Raptors', event: 8, date: 9 },
    {id: 74, market1: 'Boston Celtics', market2: 'New York Knicks', event: 8, date: 9 },
    {id: 75, market1: 'Chicago Bulls', market2: 'Miami Heat', event: 8, date: 9 },
    {id: 76, market1: 'Atlanta Hawks', market2: 'Golden State Warriors', event: 8, date: 9 },
    {id: 77, market1: 'Brooklyn Nets', market2: 'Houston Rockets', event: 8, date: 9 },
    {id: 78, market1: 'Charlotte Hornets', market2: 'Indiana Pacers', event: 8, date: 9 },
    {id: 79, market1: 'Cleveland Cavaliers', market2: 'LA Clippers', event: 8, date: 9 },
    {id: 80, market1: 'Dallas Mavericks', market2: 'Memphis Grizzlies', event: 8, date: 9 },
    {id: 81, market1: 'Denver Nuggets', market2: 'Milwaukee Bucks', event: 8, date: 9 },
    {id: 82, market1: 'Detroit Pistons', market2: 'New Orleans Pelicans', event: 8, date: 9 },
];

export const enum Message {
    Error = 1,
    Warning,
    Information,
    None,
  }


