import React from "react";
import { Container } from "../Container/Container";
import style from './TickerContent.module.scss'

interface tickerContentProps {
    children: React.ReactNode;
}

export const TickerContent: React.FC<tickerContentProps> = ({ children }) => {
    return (
        <section className={style.sectionTickerContent}>
            <Container styleComponent={style.sectionTickerContent__content}>
                {children}
            </Container>
        </section>
    )
}