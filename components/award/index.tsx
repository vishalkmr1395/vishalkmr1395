import styles from './award.module.scss';
import { AwardInterface } from '../../models/AwardInterface';
import { Heading } from '../heading';
import { SubHeading } from '../sub-heading';

export const Award: React.FunctionComponent<AwardInterface> = (props) => {
    const {
        symposium,
        college,
        event,
        date,
        prize
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.prize}>
                <img src={`images/prizes/${prize}.svg`} />
            </div>
            <div className={styles.details}>
                <Heading text={event} />
                <SubHeading text={college} />
                <h5 className={styles.date}>{date}, {symposium}</h5>
            </div>
        </div>
    )
};
