export interface ICurrencys {
    id: number;
    pairCurrencies: IpairCurrencies
}

export interface IpairCurrencies {
    pair: string;
    buy: number;
    sell: number;
}