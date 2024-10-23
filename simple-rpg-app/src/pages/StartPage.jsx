import { useNavigationManager } from "../router/NavigationManager";
import styles from './StartPage.module.css';
import logo from '../assets/icons/logo-qais-story.png';
import diceIcon from '../assets/icons/dice.png';

function StartPage() {
    const { navigateTo } = useNavigationManager();
    return (
        <div className={styles.center}>
            <img className={styles.img} src={logo} />
            <div className={styles.container}>
                <img className={styles["dice-icon"]} src={diceIcon} />
                <div className={styles.welcome}>Welcome to the Qaisssssss's Story</div>
                <div className={styles.description}>Do you think that you have all needed to survive?!</div>
            </div>
            <button className={styles["start-button"]} onClick={() => navigateTo('/story')}>Let's Go!</button>
        </div>
    );
}

export default StartPage;