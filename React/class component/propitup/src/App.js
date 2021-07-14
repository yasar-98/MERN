import React, { Component } from 'react'
import './App.css';
import PersonCard from './components/PersonCard';

class App extends Component {
  render() {

  return (
    <div className="App">
      <PersonCard firstName={"MOHAMMAD"} lastName={"HAMMOUZ"} age={26} hairColor={"black"}/>
      <PersonCard firstName="yasar" lastName="naser" age={25} hairColor="white"/>
      <PersonCard firstName="amro" lastName="othman" age={23} hairColor="brown"/>
    </div>
  );
}
}

export default App;

