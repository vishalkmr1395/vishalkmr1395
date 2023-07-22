import styles from './loader.module.scss';
import React from 'react';

interface LoaderInterface {

}

/**
 * Loader component
 * @param props 
 */
export const Loader: React.FunctionComponent<LoaderInterface> = (props) => {
    return (
        <div className={styles.spinner} />
    );
}
