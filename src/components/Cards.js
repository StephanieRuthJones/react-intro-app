

import React from 'react';
import Card from './Card'

const Cards = (props) => {
    console.log("cards props", props)
    const questions = props.triviaQuestions.map(trivia => {
        return <Card question={ trivia.question } answer={ trivia.answer } key={ trivia.id } />
    })
    return (
        <div>{ questions }</div>

    );
}

export default Cards;