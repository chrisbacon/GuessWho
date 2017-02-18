class Pokemon {

    constructor(options) {
        this.image = {fieldName: 'image', data: options.sprites['front_default'], type: 'image'}; 
        this.name = {fieldName: 'Name', data: options.name, type: 'text'}
        this.height = {fieldName: 'Height', data: options.height, type: 'text'};
        this.weight = {fieldName: 'Weight', data: options.weight, type: 'text'};
        this.types = {fieldName: 'Type', data: options.types.map(type => type.type.name), type: 'array'};
    }

}

export default Pokemon;