import React from 'react';

class ParameterInput extends React.Component {

    constructor(props) {
        super(props);

        this.inputTypes = {
            array: "text",
            text: "text",
            number: "number"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const value = event.target.value;
        this.props.enterParameter(value);
    }

    render() {

        if (this.props.selectedField) {
            return (

                <input onChange={this.handleChange} type={this.inputTypes[this.props.selectedField.type]}/>

                )
        }


        return (

            <input/>

            )


    }

}

export default ParameterInput;