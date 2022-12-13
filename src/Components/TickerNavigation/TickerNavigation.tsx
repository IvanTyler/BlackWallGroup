import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../Container/Container";
import style from './TickerNavigation.module.scss'

export const TickerNavigation: React.FC = () => {

    const location = useLocation();
    useEffect(() => { }, [location]);

    return (
        <section className={style.sectionTickerNavigation}>
            <Container styleComponent={style.sectionTickerNavigation__navigation}>
                <ul className={style.sectionTickerNavigation__list}>
                    <li
                        className={
                            window.location.href === 'http://localhost:3000/' ?
                                style.tickerListItem + ' ' + style.tickerListItemActive : style.tickerListItem
                        }
                    >
                        <Link to={'/'} className={style.tickerItemLink}>Trading</Link>
                    </li>
                    <li
                        className={
                            window.location.href === 'http://localhost:3000/Archive' ?
                                style.tickerListItem + ' ' + style.tickerListItemActive : style.tickerListItem
                        }
                    >
                        <Link to={'Archive'} className={style.tickerItemLink}>Archive</Link>
                    </li>
                </ul>
            </Container>
        </section>
    )
}