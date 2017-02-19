import React from 'react';

class AnswerPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        if (this.props.answer) {
            return (
                <div>

                    <h3>Yes</h3>

                </div>
                )
        } else if (this.props.answer === false) {
            return (
                <div>

                    <h3>No</h3>

                </div>
                )
        } else {
            return (
                <div/>
                )
        }
        
    }

}

export default AnswerPanel;