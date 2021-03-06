import React from 'react';

class ArrayQuestions extends React.Component {

    constructor(props) {
        super(props);

        this.questions = [{
            name: "is a", 
            func: function(secretValue, userGuess) {
                const index = secretValue.indexOf(userGuess)
                return index>-1;
                }
            }];

            this.handleChange = this.handleChange.bind(this);
    }

    // const flatValues = this.props.values.reduce(function(array, value) {

    //         [...array, ...value]

    //     }, []
    // )

    // const empty = {};
    // flatValues.forEach(function(e) {
    //     empty[e] = undefined
    // });

    // const uniqueValues = Object.keys(empty);

    // const = uniqueValues.forEach(function(value, index){
    //     <option key={index} value={value}>{value}</option>
    // })

    //question returns a boolean...

    handleChange(event) {
        const index = event.target.value
        this.props.selectQuestion(this.questions[index].func);
    }

    componentDidMount() {
        this.props.selectQuestion(this.questions[0].func);
    }
    
    render() {

        const options = this.questions.map(function(question, index) {
            return <option value={index} key={index}>{question.name}</option>
        })

        return(

            <select onChange={this.handleChange}>
                {options}
            </select>

            )
    }
}

export default ArrayQuestions;