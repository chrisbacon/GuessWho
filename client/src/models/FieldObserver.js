class FieldObserver {

    constructor() {
        this.fieldRecords = {};
    }

    examine(pokemon) {
        for (const key in pokemon) {
            const field = pokemon[key];
            if (field.type != "image") {
                this.recordField(field);
            }
        }
    }

    recordField(field) {
        const record = this.fieldRecords[field.fieldName]
        if (record) {
            record.values.push(field.data)
        } else {
            this.fieldRecords[field.fieldName] = {
                type: field.type,
                values: [field.data]
            }
        }
    }

    getFieldNames() {
        return Object.keys(this.fieldRecords)
    }

}

export default FieldObserver;