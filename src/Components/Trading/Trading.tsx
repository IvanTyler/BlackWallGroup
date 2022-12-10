import React, { useState } from "react";
import { DateTicker } from "../Date/DateTicker";
import style from './Trading.module.scss'

export const Trading: React.FC = () => {

    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    
    return (
        <section className={style.sectionTrading}>
            <DateTicker
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                setHours={setHours}
                setMinutes={setMinutes}
                setSeconds={setSeconds}
            />
        </section>
    )
}