import React from 'react';

class FieldSelector extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const options = this.props.fieldNames.map(function(fieldName, index) {
            console.log(fieldName)
            return <option value={fieldName} key={index}>{fieldName}</option>
        })

        return(

            <select>
                {options}
            </select>

            )
    }
}

export default FieldSelector;