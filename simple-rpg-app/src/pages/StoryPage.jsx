import { useEffect, useState } from "react";
import storyJson from '../json/story.json';
import Step from "../models/StepModel";
import StepComponent from "../components/StepComponent";

function StoryPage() {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const stepsParsed = storyJson.steps.map(opt => Step.JsonToStep(opt));
        setSteps(stepsParsed);
    }, []);

    if(steps.length === 0) { 
        return (
            <div>loading</div>
        )   
    }

    return (
        <StepComponent step={steps[0]} />
    )
}

export default StoryPage;