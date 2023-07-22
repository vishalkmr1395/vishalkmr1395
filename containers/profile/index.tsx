import styles from './profile.module.scss';

import { Navigation, SocialIcons } from '../../components';

const Profile = ({ open }) => {

    return (
        <div className={`${styles.wrapper} ${open && styles.mobile}`}>
            <div>
                <Navigation />
            </div>

            <div className={styles.profile}>
                <div className={styles.name}>Nandu Vinodan</div>
            </div>

            <SocialIcons />
        </div>
    )
};

export default Profile;