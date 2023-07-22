import useSWR from 'swr';
import PageTemplate from '../../containers/page-template/page-template';
import { DetailsContainer, EducationList, Loader } from '../../components';
import ApiConstants from '../../constants/ApiConstants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Education = () => {
    const { data, error } = useSWR(ApiConstants.EDUCATION, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="EDUCATION">
                {
                    data ? <EducationList data={data} /> : <Loader />
                }
            </DetailsContainer>
        </PageTemplate>
    )
};

export default Education;