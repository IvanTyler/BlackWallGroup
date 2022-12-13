import React, { useEffect, useState } from "react";
import { IAplication } from "../../Interfaces/IApplication";
import { IpairCurrencies } from "../../Interfaces/ICurrencys";
import style from './ModalMakeOrder.module.scss'

interface ModalProps {
    openModalMakeOrder: any;
    side: string;
    buyPrice: any;
    buyPairCurrensy: any;
}

export const ModalMakeOrder: React.FC<ModalProps> = ({
    openModalMakeOrder,
    side,
    buyPrice,
    buyPairCurrensy
}) => {

    const [volume, setVolume] = useState('')
    const [errorVolume, setErrorVolume] = useState(false)
    const [archive, setArchive] = useState<IpairCurrencies[]>([])

    const getApplications = sessionStorage.getItem('applications')

    useEffect(() => {
        if (getApplications !== null) {
            const getApplicationsSessionStorageParse = JSON.parse(getApplications)
            setArchive((prev: any) => [...getApplicationsSessionStorageParse])
        }
    }, [])

    const onPushApplication = () => {

        const year = new Date().getFullYear()
        const mounth = new Date().getMonth()
        const day = new Date().getDay()

        const hours = new Date().getHours()
        const minutes = new Date().getMinutes()
        const seconds = new Date().getSeconds()

        const lengthMinutes = String(minutes).split('').length
        const lengthSecundes = String(seconds).split('').length

        const lengthMounth = String(mounth).split('').length
        const lengthDay = String(day).split('').length

        const newApplication: IAplication = {
            id: Math.floor(Math.random() * (9999999 - 1000000) + 1000000),
            side,
            price: buyPrice,
            instrument: buyPairCurrensy,
            volume: +volume,
            timestamp: {
                date: `${year}:${lengthMounth > 1 ? mounth : `0${mounth}`}:${lengthDay > 1 ? day : `0${day}`}`,
                time: `${hours}:${lengthMinutes > 1 ? minutes : `0${minutes}`}:${lengthSecundes > 1 ? seconds : `0${seconds}`}`,
            }
        }
        const addPlication = [...archive, newApplication]

        if (volume.trim().length >= 1) {
            setArchive((prev: any) => [newApplication, ...prev])
            sessionStorage.setItem('applications', JSON.stringify(addPlication))
            setCloseModal()
            setErrorVolume(prev => prev = false)
        } else {
            setErrorVolume(prev => prev = true)
        }
    }

    const inputChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorVolume(prev => prev = false)
        if (event.target.value.length > 8) event.target.value = event.target.value.slice(0, 8);
        setVolume(event.target.value)
    }

    const submitHandlet = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onPushApplication()
    }

    const setCloseModal = () => {
        openModalMakeOrder.current!.style.display = 'none'
    }

    return (
        <div className={style.modalMakeOrder}>
            <form className={style.modalMakeOrder__form} onSubmit={submitHandlet}>
                <div className={style.modalMakeOrder__header}>
                    <h3 className={style.modalMakeOrder__title}>Make order</h3>
                    <img className={style.modalMakeOrder__closeModelIcon} src={'https://lowcost.fix.travel/img/close-white.png'}
                        onClick={() => setCloseModal()}
                        alt="Закрыть окно"
                    />
                </div>
                <div className={style.modalMakeOrder__volume}>
                    <span className={style.modalMakeOrder__volumeText}>Volume</span>
                    <input
                        className={
                            errorVolume ?
                                style.modalMakeOrder__input + ' ' + style.modalMakeOrder__errorVolume :
                                style.modalMakeOrder__input
                        }
                        type="number"
                        placeholder=""
                        onChange={inputChangeVolume}
                        value={volume}
                    />
                </div>
                <div className={style.modalMakeOrder__interactionButton}>
                    <div onClick={() => setCloseModal()} className={style.modalMakeOrder__button + ' ' + style.modalMakeOrder__cansel}>Cansel</div>
                    <button className={style.modalMakeOrder__button + ' ' + style.modalMakeOrder__submit}>ok</button>
                </div>
            </form>
        </div>
    )
}