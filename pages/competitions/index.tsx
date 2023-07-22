
import styles from './awards.module.scss';
import React, { useState } from 'react';
import useSWR from 'swr';
import PageTemplate from '../../containers/page-template/page-template';
import { DetailsContainer, AwardList, Loader } from '../../components';
import ApiConstants from '../../constants/ApiConstants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Awards = () => {

    const [loader, setLoader] = useState(false);

    const { data, error } = useSWR(ApiConstants.AWARDS, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="COMPETITIONS">
                <div className={styles.message}>
                    <p>Participating in coding competitions has always been my hobby from college days. Looking back now, these competitions and prizes are an absolute source of motivation even today.</p>
                </div>
                {
                    data ? <AwardList awards={data.college} /> : <Loader />
                }
            </DetailsContainer>
        </PageTemplate>
    )
};

export default Awards;