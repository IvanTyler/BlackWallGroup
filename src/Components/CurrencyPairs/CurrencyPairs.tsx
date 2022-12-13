import React, { useEffect, useRef, useState } from "react";
import { ICurrencys } from "../../Interfaces/ICurrencys";
import { ModalMakeOrder } from "../ModalMakeOrder/ModalMakeOrder";
import style from './CurrencyPairs.module.scss'

export const CurrencyPairs: React.FC = () => {

    const [side, setSide] = useState('Buy')
    const [buyDefault, setBuyDefault] = useState(1.5766)
    const [sellDefault, setSellDefault] = useState(1.5745)

    const [listCurrencies, setListCurrencies] = useState(false)

    const currencyTitle = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setInterval(() => {
            setBuyDefault((prev: number) => prev = generatorBuy())
            setSellDefault((prev: number) => prev = generatorSell())
        }, 5000)
    }, [])

    const generatorBuy = () => +`1.${Math.floor(Math.random() * (5766 - 5720) + 5720)}`

    const generatorSell = () => +(generatorBuy() - generatorBuy() / 100 * 0.1).toFixed(4)

    function getCurrencys(): ICurrencys[] {
        return Array.from(Array(10)).map((_: any, i: number) => {
            return {
                id: 1 + i,
                pairCurrencies: {
                    pair: `USD/CAD_TOM_${i + 1}`,
                    buy: generatorBuy(),
                    sell: generatorSell(),
                }
            }
        })
    }

    const currencys: ICurrencys[] = getCurrencys()

    const [idCurrencies, setidCurrencies] = useState(currencys[0].id)

    const selectedPairPrice = (id: number, currency: string, currentbuy: number, currentSell: number) => {
        currencyTitle.current!.innerText = currency;

        setBuyDefault(prev => prev = currentbuy)
        setSellDefault(prev => prev = currentSell)

        setidCurrencies((prev: number) => prev = id)
    }

    const buyPrice = currencys.find((el: any) => el.id === idCurrencies)?.pairCurrencies.buy
    const buyPairCurrensy = currencys.find((el: any) => el.id === idCurrencies)?.pairCurrencies.pair

    const openModalMakeOrder: React.MutableRefObject<any> = useRef(null)
    const setTitlePriceBuy = () => {
        setSide(prev => prev = 'Buy')
        openModalMakeOrder.current!.style.display = 'block'
    }

    const setTitlePriceSell = () => {
        setSide(prev => prev = 'Sell')
        openModalMakeOrder.current!.style.display = 'block'
    }

    return (
        <>
            <div ref={openModalMakeOrder} className={style.ModalMakeOrder}>
                <ModalMakeOrder
                    openModalMakeOrder={openModalMakeOrder}
                    side={side}
                    buyPrice={buyPrice}
                    buyPairCurrensy={buyPairCurrensy}
                />
            </div>
            <section className={style.sectionCurrensy}>
                <div onClick={() => setListCurrencies(prev => !prev)} className={style.sectionCurrensy__selectedCurrency}>
                    <div ref={currencyTitle} className={style.sectionCurrensy__select}>
                        {currencys[0].pairCurrencies.pair}
                    </div>
                    {listCurrencies && <ul className={style.sectionCurrensy__currencyList}>
                        {
                            currencys.length ?
                                currencys.map((el) => {
                                    return <li
                                        key={el.id}
                                        className={style.sectionCurrensy__currencyItem}
                                        onClick={() => selectedPairPrice(
                                            el.id,
                                            el.pairCurrencies.pair,
                                            el.pairCurrencies.buy,
                                            el.pairCurrencies.sell
                                        )}
                                    >
                                        {el.pairCurrencies.pair}
                                    </li>
                                }) : null
                        }
                    </ul>}
                </div>

                <div className={style.sectionCurrensy__priceBuyCell}>
                    <div onClick={() => setTitlePriceBuy()} className={style.sectionCurrensy__priceWrapper}>
                        <div className={style.sectionCurrensy__titlePrice}>BUY</div>
                        <div className={style.sectionCurrensy__currentPrice}>{buyDefault}</div>
                    </div>
                    <div onClick={() => setTitlePriceSell()} className={style.sectionCurrensy__priceWrapper}>
                        <div className={style.sectionCurrensy__titlePrice}>SELL</div>
                        <div className={style.sectionCurrensy__currentPrice}>{sellDefault}</div>
                    </div>
                </div>
            </section>
        </>
    )
}
