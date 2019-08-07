
import React from 'react';

class Card extends React.Component {
    //component needs to take in props and hold state

    // function to handle onclick event listener
    clickForAnswer = (event) => {
        event.preventDefault()
        //setstate onclick
    }
    render() {

        return (
            <div className="card">
                <img className="card-img-top" src="http://www.sporcle.com/blog/wp-content/uploads/2018/10/1-48.jpg" alt="Card image cap" />
                {/* use props give div below a key equal to the question id */ }
                <div className="card-body" >
                    {/* use props to render question number by rendering question id as question number below */ }
                    <h5 className="card-title">Question # </h5>

                    {/* use props to render question text in <p>tag</p> */ }
                    <p className="card-text">{ this.props.question }</p>

                    {/* add event listener in <a> tag</a> */ }
                    <a href="#" className="btn btn-primary">Show Answer</a>

                    {/* ternary to render answer to trivia question in <h6> or <p> tag */ }

                </div>
            </div>




        );
    }
}


export default Card;
