import React from 'react';
import { EducationDetail } from '../education-detail';
import { EducationDetailInterface } from '../../models/EducationDetailInterface';

interface EducationListInterface {
    data: Array<EducationDetailInterface>
}

/**
 * Details Container
 * @param props 
 */
export const EducationList: React.FunctionComponent<EducationListInterface> = (props) => {
    const {
        data
    } = props;
    return (
        <React.Fragment>
            {
                data ? data.map((d, index) => {
                    return <EducationDetail key={index} {...d} />
                }) : null
            }
        </React.Fragment>
    )
};
