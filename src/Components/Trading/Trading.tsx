import React from "react";
import { CurrencyPairs } from "../CurrencyPairs/CurrencyPairs";
import { TimeTicker } from "../Time/TimeTicker";
import style from './Trading.module.scss'

export const Trading: React.FC = () => {
    return (
        <section className={style.sectionTrading}>
            <TimeTicker />
            <CurrencyPairs />
        </section>
    )
}