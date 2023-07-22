import React, { useState } from 'react';
import { Swipeable } from 'react-swipeable';
import Head from 'next/head';
import styles from './page-template.module.scss';
import Profile from '../profile';
import { Header } from '../../components';

const PageTemplate = (props) => {
    const { title = '' } = props;

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        console.log("Clicked");
        setMenu(!menu);
    };

    return (
        <React.Fragment>
            <Head>
                <meta name="title" content="Nandu Vinodan" />
                <meta name="description" content="I'm a Software Engineer, experienced in developing high scalable APIs and applications focused on back-end optimizations with a demonstrated history of designing, developing and building large-scale applications. Professional with a great work ethic and strives for best results without compromising on quality with high efficient problem solving. Also, a team player who is always passionate about learning new technologies and solving challenging problems." />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta
                    httpEquiv="Cache-Control"
                    content="no-cache, no-store, must-revalidate"
                />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" />
                <link rel="shortcut icon" href="favicon/favicon.ico" />

                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
                    rel="stylesheet"
                />
                <title>Nandu Vinodan {title && ` | ${title}`}</title>
            </Head>
            <div className={styles.wrapper}>
                <Header toggleMenu={toggleMenu} />
                <section className={styles.profile}>
                    <Swipeable onSwipedLeft={toggleMenu}>
                        <Profile open={menu} />
                    </Swipeable>
                </section>
                <section className={styles.details}>
                    <Swipeable onSwipedRight={toggleMenu}>
                        {props.children}
                    </Swipeable>
                </section>
            </div>
        </React.Fragment>

    )
};

export default PageTemplate;