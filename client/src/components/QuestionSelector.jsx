import React from 'react';
import ArrayQuestions from './ArrayQuestions.jsx'
import NumberQuestions from './NumberQuestions.jsx'
import TextQuestions from './TextQuestions.jsx'

class QuestionSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.selectedField) {
            const field = this.props.selectedField
            const selectedType = field.type;

            const questions = {
                array: ArrayQuestions,
                number: NumberQuestions,
                text: TextQuestions
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