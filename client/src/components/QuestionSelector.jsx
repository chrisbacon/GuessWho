import React from 'react';
import ArrayQuestions from './ArrayQuestions.jsx'

class QuestionSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.selectedFieldName) {
            const field = this.props.fields[this.props.selectedFieldName]; 
            const selectedType = field.type;

            const questions = {
                array: ArrayQuestions,
                number: ArrayQuestions,
                text: ArrayQuestions
            }

            const SpecificQuestions = questions[selectedType]

            return(

               <SpecificQuestions selectQuestion={this.props.selectQuestion}/>

                )

        } else {
            return (<select/>)
        }

        

        
    }


}

export default QuestionSelector; 