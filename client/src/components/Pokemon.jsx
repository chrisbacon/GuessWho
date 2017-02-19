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
            <div className="pokemon">
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }

}

export default Pokemon;