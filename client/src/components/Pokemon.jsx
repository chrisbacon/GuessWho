import React from 'react';

class Pokemon extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        const lis = [];

        for (const field in this.props.pokemon) {
            lis.push(<li>{"" + this.props.pokemon[field]}</li>);
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