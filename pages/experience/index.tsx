import styles from './work-experience.module.scss';
import useSWR from 'swr';

import { DetailsContainer, WorkDetailsList, Loader } from '../../components';
import ApiConstants from '../../constants/ApiConstants';
import PageTemplate from '../../containers/page-template/page-template';

const fetcher = (url) => fetch(url).then((res) => res.json());

const WorkExperience = () => {

    const { data, error } = useSWR(ApiConstants.EXPERIENCES, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="EXPERIENCE">
                {data ? <WorkDetailsList data={data} /> : <Loader />}
            </DetailsContainer>
        </PageTemplate>
    )
};

export default WorkExperience;