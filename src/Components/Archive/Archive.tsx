import React, { useEffect, useState } from "react";
import style from './Archive.module.scss'

export const Archive: React.FC = () => {

    const getApplications = sessionStorage.getItem('applications')
    const [currentAplications, setCurrentAplications] = useState<any>([])

    useEffect(() => {
        if (getApplications !== null) {
            const getApplicationsSessionStorageParse = JSON.parse(getApplications)
            console.log(currentAplications);
            setCurrentAplications((prev: any) => [...getApplicationsSessionStorageParse])
        }
        setInterval(() => {
            setCurrentAplications((prev: any) => prev.map((el: any) => {
                return {
                    ...el,
                    price: generatorPrice(),
                }
            }))
        }, 5000)
    }, [])

    const generatorPrice = () => +`1.${Math.floor(Math.random() * (5766 - 5720) + 5720)}`

    return (
        <section className={style.sectionArchive}>
            <header className={style.headerAplicationsTitles}>
                <ul className={style.headerAplicationsTitles__list}>
                    <li className={style.headerAplicationsTitles__item}>Side</li>
                    <li className={style.headerAplicationsTitles__item}>Price</li>
                    <li className={style.headerAplicationsTitles__item}>Instrument</li>
                    <li className={style.headerAplicationsTitles__item}>Volume</li>
                    <li className={style.headerAplicationsTitles__item}>Timestamp</li>
                </ul>
            </header>
            <ul className={style.sectionArchive__aplicationsList}>
                {
                    currentAplications.length ?
                        currentAplications.map((el: any) => {
                            return <li
                                key={el.id}
                                className={style.sectionArchive__aplicationsItem}
                            >
                                <div
                                    className={
                                        el.side === 'Buy' ?
                                            style.sectionArchive__text + ' ' + style.buy :
                                            style.sectionArchive__text + ' ' + style.sell
                                    }
                                >
                                    {el.side}
                                </div>
                                <div className={style.sectionArchive__text}>
                                    {el.price}
                                </div>
                                <div className={style.sectionArchive__text}>
                                    {el.instrument}
                                </div>
                                <div className={style.sectionArchive__text}>
                                    {el.volume}
                                </div>
                                <div className={style.sectionArchive__text}>
                                    {el.timestamp.date} {el.timestamp.time}
                                </div>
                            </li>
                        }) : <div className={style.notAplications}>Заявок нет</div>
                }
            </ul>
        </section>
    )
}