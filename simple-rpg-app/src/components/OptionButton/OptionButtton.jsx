import { useState } from "react";
import { useNavigationManager } from "../../router/NavigationManager";
import styles from './OptionButton.module.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const OptionButton = ({ id, consequences, description }) => {
    const { navigateTo } = useNavigationManager();
    const [isOpenRollDice, setIsOpenRollDice] = useState(false);

    const handleRollDiceOpen = () => setIsOpenRollDice(true);
    const handleRollDiceClose = () => setIsOpenRollDice(false);

    return (
        <>
            <button key={id} className={styles['option-button']} onClick={() => handleRollDiceOpen()} >
                { description }
            </button>
            <Dialog open={isOpenRollDice} onClose={handleRollDiceClose}>
                <DialogTitle>Roll the dice!</DialogTitle>
                <DialogContent>
                    <p>The teacher will decide what value you need to roll on the dice.</p>
                </DialogContent>
                <DialogActions>
                    { consequences.map((consequence) => (
                        <Button 
                            key={`consequence-${consequence.id}`} 
                            className={styles['option-button']} 
                            onClick={() => {
                                handleRollDiceClose();
                                navigateTo(`/story/${consequence.goToStepId}`)
                            }} >
                            { consequence.title }
                        </Button>
                    )) }
                </DialogActions>
            </Dialog>
        </>
    );
}

export default OptionButton;