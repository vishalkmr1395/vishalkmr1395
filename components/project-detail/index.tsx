import styles from './project-detail.module.scss';
import { ProjectDetailInterface } from '../../models/ProjectDetailInterface';
import { TechnologyDisplayList } from '../';


/**
 * Project Detail Container
 * @param props 
 */
export const ProjectDetail: React.FunctionComponent<ProjectDetailInterface> = (props) => {
    const {
        data
    } = props;
    return (
        <div className={styles.project}>
            <h5 className={styles.name}>{data.type} : {data.name}</h5>
            <ul className={styles.responsibilities}>
                {
                    data.responsibilities && data.responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)
                }
            </ul>

            <TechnologyDisplayList data={data.technologies} />
        </div>
    )
};
