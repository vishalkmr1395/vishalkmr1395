import styles from './heading.module.scss';

export const Heading: React.FunctionComponent<{
    text: string,
    bold?: boolean
}> = (props) => {
    const {
        text,
        bold
    } = props;

    return <h3 className={`${styles.text} ${bold && styles.bold}`}>{text}</h3>
};
