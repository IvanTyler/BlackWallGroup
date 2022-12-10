import React, { useEffect, useState } from "react";
import style from './DateTicker.module.scss'

interface dateProps {
    hours: number;
    minutes: number;
    seconds: number;
    setHours(hours: any): void
    setMinutes(minutes: any): void
    setSeconds(seconds: any): void
}

export const DateTicker: React.FC<dateProps> = ({
    hours,
    minutes,
    seconds,
    setHours,
    setMinutes,
    setSeconds,
}) => {

    useEffect(() => {
        setInterval(() => {
            let date = new Date()
            setHours((prev: number) => prev = date.getHours())
            setMinutes((prev: number) => prev = date.getMinutes())
            setSeconds((prev: number) => prev = date.getSeconds())
        }, 1000)
    }, [])

    const lengthMinutes = String(minutes).split('').length
    const lengthSecundes = String(seconds).split('').length

    return (
        <span className={style.time}>
            {`${hours}:${lengthMinutes > 1 ? minutes : `0${minutes}`}:${lengthSecundes > 1 ? seconds : `0${seconds}`}`}
        </span>
    )
}