import React from 'react';
import { Award } from '..';
import { AwardInterface } from '../../models/AwardInterface';

interface AwardListInterface {
    awards: Array<AwardInterface>;
}

export const AwardList: React.FunctionComponent<AwardListInterface> = (props) => {

    const {
        awards
    } = props;


    return (
        <React.Fragment>
            {
                awards ? awards.map((award, index) => {
                    return <Award key={index} {...award} />
                }) : null
            }
        </React.Fragment>
    )
};
