import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    console.log("state", this.state)
    return (
      <div className="App" >

      </div>
    );
  }
}

export default App;
