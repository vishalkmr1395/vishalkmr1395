import styles from './details-container.module.scss';

interface DetailsContainerInterface {
    title: string
}

/**
 * Details Container
 * @param props 
 */
export const DetailsContainer: React.FunctionComponent<DetailsContainerInterface> = (props) => {
    const { title } = props;
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
};
