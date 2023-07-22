import styles from './technology-display.module.scss';

interface TechnologyDisplayInterface {
    label: string
}

/**
 * Details Container
 * @param props 
 */
export const TechnologyDisplay: React.FunctionComponent<TechnologyDisplayInterface> = (props) => {
    const {
        label
    } = props;
    return <div className={styles.label}>{label}</div>
};
