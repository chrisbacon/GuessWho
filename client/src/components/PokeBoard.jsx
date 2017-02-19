import React from 'react';
import Pokemon from './Pokemon.jsx';

class PokeBoard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const pokeComps = this.props.pokemons.map(function(p, index) {

            return <Pokemon pokemon={p} key = {index}/> 
            
            }
        )

        return (

            <div id="pokeBoard">
                {pokeComps}
            </div>

            )

    }

}

export default PokeBoard;