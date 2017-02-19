import React from 'react';

import QuestionSelector from './QuestionSelector.jsx';
import FieldSelector from './FieldSelector.jsx';

class QuestionPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFieldName: null,
            selectedQuestion: null,
            enteredParameter: "" 
        }

        this.selectField = this.selectField.bind(this)
        this.selectQuestion = this.selectQuestion.bind(this)
    }

    selectField(field) {
        this.setState({selectedFieldName: field})
    }

    selectQuestion(question) {
        this.setState({selectQuestion: question})
    }

    render () {
        return (
            <form>
                <FieldSelector fieldNames={this.props.fieldObserver.getFieldNames()} selectField={this.selectField} />
                <QuestionSelector selectQuestion={this.selectQuestion} selectedFieldName={this.state.selectedFieldName} fields={this.props.fieldObserver.getFieldRecords()}/>
                
                <button></button>
            </form>
            )
    }

}

export default QuestionPanel;