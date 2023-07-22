import styles from './about.module.scss';
import useSWR from 'swr';
import PageTemplate from '../../containers/page-template/page-template';
import { Badge, DetailsContainer, Heading } from '../../components';
import ApiConstants from '../../constants/ApiConstants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const About = () => {
    const { data, error } = useSWR(ApiConstants.CODING_PROFILE, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="ABOUT">
                <p className={styles.hello}>Hello World.</p>
                <p className={styles.info}>
                    I'm a Software Engineer, experienced in developing high scalable APIs and applications focused on back-end optimizations with a demonstrated history of designing, developing and building large-scale applications. Professional with a great work ethic and strives for best results without compromising on quality with high efficient problem solving. Also, a team player who is always passionate about learning new technologies and solving challenging problems.
                </p>
                <p className={styles.info}>
                    I am highly proficient in C++, Java, multi-threaded programming and micro-services architectures. I love participating in competitive programming challenges and of late, I am exploring designing and implementing scalable and highly available distributed systems. Checkout my coding profiles here.
                </p>

                <div className={styles.codingProfile}>
                    {
                        data && data.map(d => {
                            return <a key={d.link} href={d.link} target="_blank"><Badge name={d.name} icon={d.icon} /></a>
                        })
                    }
                </div>

                <p className={styles.info}>
                    I have experience in various software life-cycle phases including but not limited to  requirements phase, designing solutions, setting-up build environment and deployment infrastructure, planning release milestones, developing software and building dashboards for monitoring.
                </p>
                <div className={styles.info}>
                    <Heading text="Contact Me" />
                    <a href="mailTo:nanduvinodan2@gmail.com">nanduvinodan2@gmail.com</a>
                </div>
            </DetailsContainer>
        </PageTemplate>
    )
};

export default About;