import { useNavigationManager } from "../../router/NavigationManager";
import styles from './OptionButton.module.css';

const OptionButton = ({ id, goToID, description }) => {
    const { navigateTo } = useNavigationManager();

    return (
        <button key={id} className={styles['option-button']} onClick={() => navigateTo(`/story/${goToID}`)} >
            { description }
        </button>
    );
}

export default OptionButton;