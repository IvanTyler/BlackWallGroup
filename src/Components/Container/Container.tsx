import React from "react";
import style from './Container.module.scss'

interface IContainerProps {
    children: React.ReactNode;
    styleComponent?: string
}

export const Container: React.FC<IContainerProps> = ({ children, styleComponent }) => {
    return (
        <div className={style.container + ' ' + styleComponent}>
            {children}
        </div>
    )
}