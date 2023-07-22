import styles from './education-detail.module.scss';
import { Heading } from '../heading';
import { SubHeading } from '../sub-heading';
import { EducationDetailInterface } from '../../models/EducationDetailInterface';

/**
 * Education Details
 * @param props 
 */
export const EducationDetail: React.FunctionComponent<EducationDetailInterface> = (props) => {
    const {
        graduation,
        specialization,
        year,
        school,
        percentage
    } = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.score}>
                {percentage.score}<span>{percentage.units}</span>
            </h1>
            <Heading text={`${graduation} (${specialization})`} />
            {
                school &&
                <SubHeading text={`${school.name}, ${school.location}`} />
            }
            <h5>{year}</h5>
            {/* <div className={styles.image}></div> */}
        </div>
    )
};
