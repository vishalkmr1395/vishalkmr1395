import styles from './technology-display-list.module.scss';
import { TechnologyDisplay } from '../';

interface TechnologyDisplayListInterface {
    data: any
}

export const TechnologyDisplayList: React.FunctionComponent<TechnologyDisplayListInterface> = (props) => {
    const {
        data
    } = props;

    return (
        <div className={styles.wrapper}>
            {
                data && data.map(label => <TechnologyDisplay key={label} label={label} />)
            }
        </div>
    )
}
