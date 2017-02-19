import React from 'react';

const ArrayField = function(props) {

        const lis = props.data.map(function(text, index) {
            return <li key={index}>{text}</li>
        } )

        return (

            <li>{props.fieldName + ":"} <ul>{lis}</ul></li>

            )
        
    }

export default ArrayField;