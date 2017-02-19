import React from 'react';
import ArrayField from './ArrayField.jsx'
import TextField from './TextField.jsx'
import ImageField from './ImageField.jsx'

class Pokemon extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(event) {
        const div = event.currentTarget
        if (div.className === "pokemon true") {
            div.className = "pokemon false"
        } else {
            div.className = "pokemon true"
        }
    }

    render () {

        const fields = {
            array: ArrayField,
            text: TextField,
            number: TextField,
            image: ImageField
        }

        const lis = [];

        let i=0;
        for (const key in this.props.pokemon) {

            const field = this.props.pokemon[key]; 

            const SpecificField = fields[field.type];

            lis.push(<SpecificField key={i} fieldName={field.fieldName} data={field.data}/>);
            i++;
        }

        return (
            <div onClick = {this.handleClick} className="pokemon true">
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }

}

export default Pokemon;