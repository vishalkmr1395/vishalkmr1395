import styles from './badge.module.scss';
import React from 'react';

interface BadgeInterface {
    icon: string,
    name: string
}

/**
 * Badge component
 * @param props 
 */
export const Badge: React.FunctionComponent<BadgeInterface> = ({
    icon, name
}) => {
    return (
        <div className={styles.badge}>
            <div className={styles.icon}>
                <img src={icon} />
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    );
}
