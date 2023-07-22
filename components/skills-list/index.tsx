import styles from './skills-list.module.scss';
import React from 'react';
import { Skill } from '../skill';
import { SkillInterface } from '../../models/SkillInterface';

interface SkillsListInterface {
    skills: Array<SkillInterface>
}

export const SkillsList: React.FunctionComponent<SkillsListInterface> = ({ skills }) => {
    return (
        <div className={styles.list}>
            {
                skills ? skills.map((skill, index) => {
                    return <Skill key={index} {...skill} />
                }) : null
            }
        </div>
    );
}
