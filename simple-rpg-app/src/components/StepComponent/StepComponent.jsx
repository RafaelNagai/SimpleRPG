import OptionButton from '../OptionButton/OptionButtton';
import styles from './StepComponent.module.css';

function StepComponent({ step }) {
    return (
        <>
            <img src={step.scenarioImage} />
            <div className={styles['step-container']} >
                <div className={styles.title}>{ step.title }</div>
                <div className={styles.description}>{ step.description }</div>
                {
                    step.options.map((opt) => (
                        <OptionButton 
                            id={`optionButton${opt.id}`}  
                            description={opt.description}
                            consequences={opt.consequences} />
                    ))
                }
            </div>
        </>
    );
}

export default StepComponent;