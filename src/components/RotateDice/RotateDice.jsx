import diceIcon from '../../assets/icons/dice.png';
import styles from './RotateDice.module.css';

const RotateDice = () => {
    return (
        <img className={styles.dice} src={diceIcon} />
    )
}

export default RotateDice;