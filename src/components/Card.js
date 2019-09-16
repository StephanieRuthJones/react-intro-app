
import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAnswer: false
        };
    }


    clickForAnswer = (event) => {
        event.preventDefault()
        this.setState({ showAnswer: !this.state.showAnswer })
    }
    render() {

        return (
            <div className="card">
                <img className="card-img-top" alt="trivia-pic" src="http://www.sporcle.com/blog/wp-content/uploads/2018/10/1-48.jpg" alt="Card image cap" />
                <div className="card-body" key={ this.props.id }>
                    <h5 className="card-title">Question #{ this.props.id }</h5>
                    <p className="card-text">{ this.props.question }</p>
                    <a href="#" onClick={ this.clickForAnswer } className="btn btn-primary">Show Answer</a>
                    { this.state.showAnswer === true ? <h6>{ this.props.answer }</h6> : null }
                </div>
            </div>




        );
    }
}


export default Card;
