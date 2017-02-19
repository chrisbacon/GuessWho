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
        this.getQuery = this.getQuery.bind(this);
    }

    getQuery(fieldName, question, input) {
        const field = this.state.hiddenPokemon[fieldName.toLowerCase()];
        const answer = question(field.data, input);
        this.setState({answer: answer});
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

                this.setState({pokemons: pokemons}, this.setState({hiddenPokemon: this.state.pokemons[0]}));
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

            <div id="container">
                <AnswerPanel answer={this.state.answer}/>
                <PokeBoard pokemons={this.state.pokemons}/>
                <QuestionPanel getQuery = {this.getQuery} fieldObserver = {this.fieldObserver}/>
            </div>

            )

    }

}

export default GuessWho;