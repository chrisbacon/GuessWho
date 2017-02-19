import React from 'react';

class TextQuestions extends React.Component {

    constructor(props) {
        super(props);

        this.questions = [{
            name: "is a", 
            func: function(secretValue, userGuess) {
                return secretValue === userGuess
                }
            }];
    }

    handleChange(event) {
        const index = event.target.value
        this.props.selectQuestion(this.questions[index]);
    }
    
    render() {

        const options = this.questions.map(function(question, index) {
            return <option value={index} key={index}>{question.name}</option>
        })

        console.log(this.questions)

        return(

            <select onChange={this.handleChange.bind(this)}>
                {options}
            </select>

            )
    }
}

export default TextQuestions;