import useSWR from 'swr';
import PageTemplate from '../../containers/page-template/page-template';
import { DetailsContainer, EducationList } from '../../components';
import ApiConstants from '../../constants/ApiConstants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const CodingProfile = () => {
    const { data, error } = useSWR(ApiConstants.EDUCATION, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="CODING PROFILE">

            </DetailsContainer>
        </PageTemplate>
    )
};

export default CodingProfile;