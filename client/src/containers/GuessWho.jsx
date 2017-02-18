import React from 'react';

import AnswerPanel from '../components/AnswerPanel.jsx';
import PokeBoard from '../components/PokeBoard.jsx';
import QuestionPanel from '../components/QuestionPanel.jsx';

import Pokemon from '../models/Pokemon.js';
import FieldObserver from '../models/FieldObserver.js'

class GuessWho extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            pokemons: [],
            hiddenPokemon: {},
            answer: null

        }

        this.fieldObserver = new FieldObserver();
    }

    getPokemon(id) {
        const request = new XMLHttpRequest();
        request.open('GET', "https://pokeapi.co/api/v2/pokemon/" + id);
        
        request.onload = function() {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);

                const pokemon = new Pokemon(data);
                this.fieldObserver.examine(pokemon);

                const pokemons = this.state.pokemons

                pokemons.push(pokemon);

                this.setState({pokemons: pokemons});
            }
        }.bind(this)

        request.send();
    }

    componentDidMount() {
        this.getPokemon(1)
        this.getPokemon(4)
        this.getPokemon(7)
    }

    render() {
        return(

            <div>
                <AnswerPanel/>
                <PokeBoard pokemons={this.state.pokemons}/>
                <QuestionPanel fieldObserver = {this.fieldObserver}/>
            </div>

            )

    }

}

export default GuessWho;