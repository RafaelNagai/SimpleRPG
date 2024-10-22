import { useNavigationManager } from "../../router/NavigationManager";
import styles from './RollDiceModal.module.css';

const RollDiceModal = ({isOpened, onClose, consequences}) => {
    const { navigateTo } = useNavigationManager();
    
    if(!isOpened) return null;

    return (
        <>
            <div className={styles["modal-overlay"]} onClick={onClose} />
            <div className={styles["modal-content"]}>
                <div className={styles.declaration}>
                    <div className={styles.title}>Roll the dice!</div>
                    <div className={styles.description}>The teacher will decide what value you need to roll on the dice.</div>
                </div>
                { consequences.map((consequence) => (
                    <button 
                        key={`consequence-${consequence.id}`} 
                        className={styles['consequence-button']}
                        onClick={() => {
                            onClose();
                            navigateTo(`/story/${consequence.goToStepId}`)
                        }} >
                        { consequence.title }
                    </button>
                )) }
            </div>
        </>  
    );
}

export default RollDiceModal;