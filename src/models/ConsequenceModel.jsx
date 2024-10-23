import Option from './OptionModel';

class Consequence {
    constructor(id, title, goToStepId) {
        this.id = id;
        this.title = title;
        this.goToStepId = goToStepId;
    }

    static JsonToConsequence(jsonData) {
        return new Consequence(
            jsonData.consequenceId,
            jsonData.title,
            jsonData.goToStepId,
        );
    }
}

export default Consequence;