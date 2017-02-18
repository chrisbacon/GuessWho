import React from 'react';

import QuestionSelector from './QuestionSelector.jsx';
import FieldSelector from './FieldSelector.jsx';

class QuestionPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            question: null,
            parameter: null
        }
    }

    render () {
        return (
            <form>
                <QuestionSelector/>
                <FieldSelector fieldNames={this.props.fieldNames} />
                <button></button>
            </form>
            )
    }

}

export default QuestionPanel;