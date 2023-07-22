import styles from './sub-heading.module.scss';

export const SubHeading: React.FunctionComponent<{
    text: string
}> = (props) => {
    const {
        text
    } = props;

    return <h4 className={styles.text}>{text}</h4>
};
