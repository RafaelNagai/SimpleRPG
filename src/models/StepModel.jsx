import Option from './OptionModel';

class Step {
    constructor(id, scenarioImage, title, description, options) {
        this.id = id;
        this.scenarioImage = scenarioImage;
        this.title = title;
        this.description = description;
        this.options = options;
    }

    static JsonToStep(jsonData) {
        const options = jsonData.options.map(opt => Option.JsonToOption(opt));
        return new Step(
            jsonData.id,
            jsonData.scenarioImage,
            jsonData.title,
            jsonData.description,
            options
        );
    }
}

export default Step;