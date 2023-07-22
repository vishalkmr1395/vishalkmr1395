import styles from './social-icons.module.scss';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export const SocialIcons = (props) => {
    return (
        <div className={styles.socialIcons}>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/nanduvinodan/" target="_blank"><FaLinkedin /></a>
                </li>

                <li>
                    <a href="https://www.facebook.com/nandu.vinod.5" target="_blank"><FaFacebook /></a>
                </li>

                <li>
                    <a href="https://github.com/nanduV" target="_blank"><FaGithub /></a>
                </li>
            </ul>
        </div>
    )
};
