import React from "react";
import style from './TickerNavigationItem.module.scss'
import { ITickerNavigation } from "../../Interfaces/TickerNavigation";
import { Link } from "react-router-dom";

interface TickerItemProps {
    item: ITickerNavigation
    setTickerList(id: any): void
}

export const TickerNavigationItem: React.FC<TickerItemProps> = ({ item, setTickerList }) => {

    const activeTabTicker = (id: number) => {
        setTickerList((prev: any[]) => prev.map((el: any) => {
            if (el.id === id) {
                return {
                    ...el,
                    active: true
                }
            } else if (el.id !== id) {
                return {
                    ...el,
                    active: false
                }
            }
            return el
        }))
    }

    return (
        <li
            className={item.active ?
                style.tickerListItem + ' ' + style.tickerListItemActive :
                style.tickerListItem
            }
            onClick={() => activeTabTicker(item.id)}

        >
            <Link to={item.link} className={style.tickerItemLink}>{item.name}</Link>
        </li>
    )
}