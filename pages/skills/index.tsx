import styles from './work-experience.module.scss';
import useSWR from 'swr';

import { DetailsContainer, SkillsList, Loader } from '../../components';
import ApiConstants from '../../constants/ApiConstants';
import PageTemplate from '../../containers/page-template/page-template';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Skills = () => {

    const { data, error } = useSWR(ApiConstants.SKILLS, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="SKILLS">
                {data ? <SkillsList skills={data} /> : <Loader />}
            </DetailsContainer>
        </PageTemplate>
    )
};

export default Skills;