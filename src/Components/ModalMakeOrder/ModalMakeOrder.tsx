import React, { useState } from "react";
import style from './ModalMakeOrder.module.scss'

interface ModalProps {
    setOpenModal: (item: any) => void;
    buyTitlePrice: string;
    buyPrice: any;
    buyPairCurrensy: any;
}

export const ModalMakeOrder: React.FC<ModalProps> = ({
    setOpenModal,
    buyTitlePrice,
    buyPrice,
    buyPairCurrensy
}) => {
    console.log(buyTitlePrice, buyPrice, buyPairCurrensy);

    const [volume, setVolume] = useState('')

    const inputChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(event.target.value)
    }
    
    const submitHandlet = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const year = new Date().getFullYear()
        const mounth = new Date().getMonth()
        const day = new Date().getDay()
        const hours = new Date().getHours()
        const minutes = new Date().getMinutes()
        const seconds = new Date().getSeconds()

        if (volume.trim().length > 1) {
            const buy = {
                buy: buyTitlePrice,
                price: buyPrice,
                instrument: buyPairCurrensy,
                volume: volume,
                timestap: {
                    date: `${year}.${mounth}.${day}`,
                    time: `${hours}:${minutes}:${seconds}`
                }
            }
            console.log(buy);
        }
    }

    return (
        <div className={style.modalMakeOrder}>
            <form className={style.modalMakeOrder__form} onSubmit={submitHandlet}>
                <div className={style.modalMakeOrder__header}>
                    <h3 className={style.modalMakeOrder__title}>Make order</h3>
                    <img className={style.modalMakeOrder__closeModelIcon} src={'https://lowcost.fix.travel/img/close-white.png'}
                        onClick={() => setOpenModal((prev: boolean) => !prev)}
                        alt="Закрыть окно"
                    />
                </div>
                <div className={style.modalMakeOrder__volume}>
                    <span className={style.modalMakeOrder__volumeText}>Volume</span>
                    <input
                        className={style.modalMakeOrder__input}
                        type="number"
                        placeholder=""
                        onChange={inputChangeVolume}
                        value={volume}
                        max={20000000}
                    />
                </div>
                <div className={style.modalMakeOrder__interactionButton}>
                    <div onClick={() => setOpenModal((prev: boolean) => !prev)} className={style.modalMakeOrder__button + ' ' + style.modalMakeOrder__cansel}>Cansel</div>
                    <button className={style.modalMakeOrder__button + ' ' + style.modalMakeOrder__submit}>ok</button>
                </div>
            </form>
        </div>
    )
}