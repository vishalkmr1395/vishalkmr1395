import styles from './skill.module.scss';
import React from 'react';
import { SkillInterface } from '../../models/SkillInterface';
import { Heading } from '../heading';
import { Badge } from '../badge';

export const Skill: React.FunctionComponent<SkillInterface> = ({
    category, items
}) => {
    return (
        <div>
            <Heading text={category} />
            <div className={styles.skills}>
                {
                    items ? items.map((item, index) => {
                        return <Badge key={index} name={item.name} icon={item.icon} />
                    }) : null
                }
            </div>
        </div>
    );
}
