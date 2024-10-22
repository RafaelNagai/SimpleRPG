import { useEffect, useState } from "react";
import storyJson from '../json/story.json';
import Step from "../models/StepModel";
import StepComponent from "../components/StepComponent/StepComponent";
import { useParams } from "react-router-dom";

function StoryPage() {
    const [steps, setSteps] = useState([]);
    const { stepID } = useParams();

    useEffect(() => {
        const stepsParsed = storyJson.steps.map(opt => Step.JsonToStep(opt));
        setSteps(stepsParsed);
    }, []);

    if(steps.length === 0) { 
        return (
            <div>loading</div>
        )   
    }

    const stepChosen = steps.find((step) => step.id === stepID) || steps[0];

    return (
        <StepComponent step={stepChosen} />
    )
}

export default StoryPage;