export class Login {
    username: string;
    password: string;
}

export class Sports {
    id: number;
    sport: string;
}

export class Events {
    id: number;
    event: string;
    sport: number;
}

export class MarketsDates {
    id: number;
    event: number;
    date: string;
}

export class Markets {
    id: number;
    market: string;
    event: number;
    date: number;
}
