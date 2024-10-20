class Option {
    constructor(id, description, goToNextStepId) {
        this.id = id;
        this.description = description;
        this.goToNextStepId = goToNextStepId;
    }

    static JsonToOption(jsonData) {
        return new Option(
            jsonData.optionId, 
            jsonData.description, 
            jsonData.goToStepId
        );
    }
}

export default Option;