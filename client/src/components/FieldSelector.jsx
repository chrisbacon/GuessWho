import React from 'react';

class FieldSelector extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const selectedField = event.target.value;
        this.props.selectField(selectedField);
    }

    render() {
        const options = this.props.fieldNames.map(function(fieldName, index) {
            return <option value={fieldName} key={index}>{fieldName}</option>
        })

        return(

            <select onChange={this.handleChange}>
                {options}
            </select>

            )
    }
}

export default FieldSelector;