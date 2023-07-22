import styles from './work-detail.module.scss';
import React, { useState } from 'react';
import { ProjectDetail } from '../project-detail';
import { Heading } from '../heading';
import { WorkDetailInterface } from '../../models/WorkDetailInterface';


/**
 * WorkDetail
 * @param props 
 */
export const WorkDetail: React.FunctionComponent<WorkDetailInterface> = (props) => {
    const {
        timePeriod,
        designation,
        organization,
        projects,
        show = false
    } = props;

    const [showProjects, setShowProjects] = useState(show);

    const toggle = () => {
        setShowProjects(prev => !prev);
    }

    return (
        <div className={`${styles.container} ${showProjects && styles.open}`}>
            <header>
                <div className={styles.logo}>
                    <img src={organization.logo} />
                </div>
                <div className={styles.details}>
                    <div className={styles.info}>
                        <div className={styles.timePeriod}>{timePeriod}</div>
                        <Heading text={designation} bold={true} />
                        <h4 className={styles.organization}>
                            <a href={organization.website} target="_blank">{organization.name}</a>, {organization.location}
                        </h4>
                    </div>
                    <span className={styles.toggle} onClick={toggle}>
                        {showProjects ? 'Hide' : 'Show'} Projects
                    </span>
                </div>
            </header>

            {
                showProjects && (<div className={styles.project}>
                    {
                        projects && projects.map(project => <ProjectDetail key={project.name} data={project} />)
                    }
                </div>)
            }

        </div>
    )
};
