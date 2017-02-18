import React from 'react';

import AnswerPanel from '../components/AnswerPanel.jsx';
import PokeBoard from '../components/PokeBoard.jsx';
import QuestionPanel from '../components/QuestionPanel.jsx';

import Pokemon from '../models/Pokemon.js';

class GuessWho extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            pokemons: [],
            hiddenPokemon: {},
            answer: null

        }
    }

    getPokemon(id) {
        const request = new XMLHttpRequest();
        request.open('GET', "https://pokeapi.co/api/v2/pokemon/" + id);
        
        request.onload = function() {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);

                const pokemon = new Pokemon(data);

                const pokemons = this.state.pokemons

                pokemons.push(pokemon);

                this.setState({pokemons: pokemons});
            }
        }.bind(this)

        request.send();
    }

    componentDidMount() {
        this.getPokemon(1)
        this.getPokemon(2)
        this.getPokemon(3)
    }

    render() {

        return(

            <div>
                <AnswerPanel/>
                <PersonBoard pokemons={this.state.pokemons}/>
                <QuestionPanel/>
            </div>

            )

    }

}

export default GuessWho;