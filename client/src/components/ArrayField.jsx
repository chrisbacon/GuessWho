import React from 'react';

const ArrayField = function(props) {

        const lis = props.data.map(text => <li>{text}</li>)

        return (

            <li>{props.fieldName + ":"} <ul>{lis}</ul></li>

            )
        
    }

export default ArrayField;