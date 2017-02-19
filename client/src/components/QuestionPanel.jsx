import React from 'react';

import QuestionSelector from './QuestionSelector.jsx';
import FieldSelector from './FieldSelector.jsx';
import ParameterInput from './ParameterInput.jsx';

class QuestionPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedField: null,
            selectedQuestion: null,
            enteredParameter: "" 
        }

        this.selectField = this.selectField.bind(this)
        this.selectQuestion = this.selectQuestion.bind(this)
        this.enterParameter = this.enterParameter.bind(this)
    }

    selectField(fieldName) {
        const field = this.props.fieldObserver.getFieldRecords()[fieldName]
        this.setState({selectedField: field})
    }

    selectQuestion(question) {
        this.setState({selectQuestion: question})
    }

    enterParameter(parameter) {
        this.setState({enteredParameter: paramter})
    }

    render () {
        return (
            <form>
                <FieldSelector fieldNames={this.props.fieldObserver.getFieldNames()} selectField={this.selectField} />
                <QuestionSelector selectQuestion={this.selectQuestion} selectedField={this.state.selectedField} />
                <ParameterInput selectedField={this.state.selectedField} enterParameter={this.enterParameter}/>
                
                <button></button>
            </form>
            )
    }

}

export default QuestionPanel;