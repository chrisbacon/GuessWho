import React from 'react';

class ParameterInput extends React.Component {

    constructor(props) {
        super(props);

        this.inputTypes = {
            array: "text",
            text: "text",
            number: "number"
        }
    }

    render() {

        if (this.props.selectedField) {
            return (

                <input type={this.inputTypes[this.props.selectedField.type]}/>

                )
        }


        return (

            <input/>

            )


    }

}

export default ParameterInput;