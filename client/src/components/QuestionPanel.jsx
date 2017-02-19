import React from 'react';

import QuestionSelector from './QuestionSelector.jsx';
import FieldSelector from './FieldSelector.jsx';
import ParameterInput from './ParameterInput.jsx';

class QuestionPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedField: null,
            selectedFieldName: "",
            selectedQuestion: null,
            enteredParameter: "" 
        }

        this.selectField = this.selectField.bind(this)
        this.selectQuestion = this.selectQuestion.bind(this)
        this.enterParameter = this.enterParameter.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    selectField(fieldName) {
        const field = this.props.fieldObserver.getFieldRecords()[fieldName]
        this.setState({selectedField: field, selectedFieldName: fieldName})
    }

    selectQuestion(question) {
        this.setState({selectedQuestion: question})
    }

    enterParameter(parameter) {
        this.setState({enteredParameter: parameter})
    }

    handleClick(event) {
        event.preventDefault();
        this.props.getQuery(this.state.selectedFieldName, this.state.selectedQuestion, this.state.enteredParameter);
    }

    render () {
        return (
            <form>
                <FieldSelector fieldNames={this.props.fieldObserver.getFieldNames()} selectField={this.selectField} />
                <QuestionSelector selectQuestion={this.selectQuestion} selectedField={this.state.selectedField} />
                <ParameterInput selectedField={this.state.selectedField} enterParameter={this.enterParameter}/>
                <button onClick={this.handleClick}/>
            </form>
            )
    }

}

export default QuestionPanel;