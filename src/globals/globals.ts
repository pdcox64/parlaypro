export class Login {
    username: string;
    password: string;
}

export class BetWin {
    id: number;
    sport: number;
    win: string;
}

export class Sports {
    id: number;
    sport: string;
    icon: string;
    overunder: OverUnder;
}

export class SportEvents {
    id: number;
    event: string;
    sport: number;
}

export class OverUnder{
    id: number;
    range: string[];
    type: string;
}

export class MarketsDates {
    id: number;
    event: number;
    date: string;
}

export class Markets {
    id: number;
    market1: string;
    market2: string;
    event: number;
    date: number;
}



