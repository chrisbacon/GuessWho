import React from 'react';

import QuestionSelector from './QuestionSelector.jsx';
import ParameterSelector from './ParameterSelector.jsx';

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

            <QuestionSelector/>
            <ParameterSelector/>
            <Button/>

            )
    }

}

export default QuestionPanel;