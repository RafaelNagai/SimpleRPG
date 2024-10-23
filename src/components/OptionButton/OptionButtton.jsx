import { useState } from "react";
import styles from './OptionButton.module.css';
import RollDiceModal from "../Modal/RollDiceModal";

const OptionButton = ({ id, consequences, description }) => {
    const [isOpenRollDice, setIsOpenRollDice] = useState(false);

    const handleRollDiceOpen = () => setIsOpenRollDice(true);
    const handleRollDiceClose = () => setIsOpenRollDice(false);

    return (
        <>
            <button key={id} className={styles['option-button']} onClick={() => handleRollDiceOpen()} >
                { description }
            </button>
            <RollDiceModal isOpened={isOpenRollDice} onClose={handleRollDiceClose} consequences={consequences}/>
        </>
    );
}

export default OptionButton;