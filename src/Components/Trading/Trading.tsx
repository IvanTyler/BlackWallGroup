import React from "react";
import { CurrencyPairs } from "../CurrencyPairs/CurrencyPairs";
import { DateTicker } from "../Date/DateTicker";
import style from './Trading.module.scss'

export const Trading: React.FC = () => {

    return (
        <section className={style.sectionTrading}>
            <DateTicker />
            <CurrencyPairs />
        </section>
    )
}