import styles from './StepComponent.module.css';

function StepComponent({ step }) {
    return (
        <>
            <img src={step.scenarioImage} />
            <div>{ step.title }</div>
            <div>{ step.description }</div>
            <ul>
                {
                    step.options.map((opt) => (
                        <li key={opt.id}>{opt.description}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default StepComponent;