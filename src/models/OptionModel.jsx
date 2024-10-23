import Consequence from "./ConsequenceModel";

class Option {
    constructor(id, description, consequences) {
        this.id = id;
        this.description = description;
        this.consequences = consequences;
    }

    static JsonToOption(jsonData) {
        const consequences = jsonData.consequences.map(opt => Consequence.JsonToConsequence(opt));
        return new Option(
            jsonData.optionId, 
            jsonData.description, 
            consequences
        );
    }
}

export default Option;