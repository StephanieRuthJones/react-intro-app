import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'


// this component needs to hold state - how should we refactor?
const App = () => {


  // componentDidMount() {
  // fetch here 
  // }


  return (


    <div className="App" >
      <Navbar />
      {/* component code here */ }

    </div>
  );

}

export default App;
