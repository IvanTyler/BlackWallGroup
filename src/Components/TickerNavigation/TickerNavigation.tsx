import React, { useState } from "react";
import { ITickerNavigation } from "../../Interfaces/TickerNavigation";
import { Container } from "../Container/Container";
import { List } from "../List/List";
import { TickerNavigationItem } from "../TickerItem/TickerNavigationItem";
import style from './TickerNavigation.module.scss'

export const TickerNavigation: React.FC = () => {

    const list: ITickerNavigation[] = [
        {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            name: 'Trading',
            link: '/',
            active: true,
        },
        {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            name: 'Archive',
            link: 'Archive',
            active: false,
        }
    ]

    const [tickerList, setTickerList] = useState<ITickerNavigation[]>(list)

    return (
        <section className={style.sectionTickerNavigation}>
            <Container styleComponent={style.sectionTickerNavigation__navigation}>
                <ul className={style.sectionTickerNavigation__list}>
                    <List
                        items={tickerList}
                        renderItem={(item: ITickerNavigation) =>
                            <TickerNavigationItem
                                item={item}
                                setTickerList={setTickerList}
                                key={item.id}
                            />}
                    />
                </ul>
            </Container>
        </section>
    )
}