import React from 'react';
import './App.css';

import NavBar from './components/Navbar'
import Cards from './components/Cards'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      triviaQuestions: []
    };
  }

  componentDidMount() {
    fetch('http://jservice.io/api/clues')
      .then(response => response.json())
      .then(triviaQuestions => this.setState({ triviaQuestions }));
  }


  render() {
    console.log("state", this.state)

    return (


      <div className="App" >
        <NavBar />

        <Cards triviaQuestions={ this.state.triviaQuestions } />

      </div>
    );
  }
}

export default App;
