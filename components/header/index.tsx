import styles from './header.module.scss';
import React from 'react';
import { CgMenuLeft } from 'react-icons/cg'

interface HeaderInterface {
    toggleMenu
}

export const Header: React.FunctionComponent<HeaderInterface> = ({
    toggleMenu
}) => {
    return (
        <header className={styles.header}>
            <h2 onClick={toggleMenu}><CgMenuLeft /></h2>
            <h2>Nandu Vinodan</h2>
            <h2></h2>
        </header>
    );
}
