class Pokemon {

    constructor(options) {

        this.name = options.name
        this.height = options.height;
        this.weight = options.weight;
        this.image = options.sprites['front_default'];
        this.types = options.types.map(type => type.type.name);
    }

}

export default Pokemon;