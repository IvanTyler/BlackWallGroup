import React, { useEffect, useRef, useState } from "react";
import style from './DateTicker.module.scss'

export const DateTicker: React.FC = () => {

    const time = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        setInterval(() => setTime(), 1000)
        setTimeout(() => setTime(), 0)
    }, [])

    function setTime() {
        const hours = new Date().getHours()
        const minutes = new Date().getMinutes()
        const seconds = new Date().getSeconds()

        const lengthMinutes = String(minutes).split('').length
        const lengthSecundes = String(seconds).split('').length

        time.current!.innerHTML = `${hours}:${lengthMinutes > 1 ? minutes : `0${minutes}`}:${lengthSecundes > 1 ? seconds : `0${seconds}`}`
    }

    return (
        <span ref={time} className={style.time}></span>
    )
}