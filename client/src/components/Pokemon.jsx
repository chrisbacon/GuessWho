import React from 'react';
import ArrayField from './ArrayField.jsx'
import TextField from './TextField.jsx'
import ImageField from './ImageField.jsx'

class Pokemon extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        const fields = {
            array: ArrayField,
            text: TextField,
            image: ImageField
        }

        const lis = [];

        for (const key in this.props.pokemon) {

            const field = this.props.pokemon[key]; 

            const SpecificField = fields[field.type];

            lis.push(<SpecificField fieldName={field.fieldName} data={field.data}/>);
        }

        return (
            <div>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }

}

export default Pokemon;