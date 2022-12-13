export interface IAplication {
    id: number;
    side: string;
    price: number;
    volume: number;
    instrument: number;
    timestamp: Itimestamp;
}

export interface Itimestamp {
    date: string;
    time: string;
}