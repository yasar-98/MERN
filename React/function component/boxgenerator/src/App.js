import './App.css';
import React, { useState } from 'react'
import FormBox from './components/FormBox';
import ShowBoxes from './components/ShowBoxes';

function App() {
  const [inputs, setInputs] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
        <FormBox inputs={inputs} setInputs={setInputs} />
        <ShowBoxes inputs={inputs}/>
      </header>
    </div>
  );
}
export default App;
