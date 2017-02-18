import React from 'react';

import QuestionSelector from './QuestionSelector.jsx';
import FieldSelector from './FieldSelector.jsx';

class QuestionPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedField: null
        }

        this.selectField = this.selectField.bind(this)
    }

    selectField(field) {
        this.setState({selectedField: field})
    }

    render () {
        return (
            <form>
                <QuestionSelector fields={this.props.fieldObserver.getFieldRecords()}/>
                <FieldSelector fieldNames={this.props.fieldObserver.getFieldNames()} selectField={this.selectField} />
                <button></button>
            </form>
            )
    }

}

export default QuestionPanel;