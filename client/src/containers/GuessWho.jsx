import React from 'react';

class GuessWho extends React.component {

    constructor(props) {
        super(props);

        this.state{

            population: [],
            person: {},
            answer: null

        }
    }

    render() {

        return(

            <div>
                <AnswerPanel/>
                <PersonBoard/>
                <QuestionPanel/>
            </div>

            )

    }

}

export default GuessWho;