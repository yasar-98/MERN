import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import MyComp from './components/MyComp';
import TapsShow from './components/TapsShow';
import TapsDisplay from './components/TapsDisplay';
function App() {
  const[data, setData] = useState("");
  const newContent = (content) => {
    setData(content);
  }

  return (
    <div className="App">
      <header className="App-header">
        <TapsShow data= {newContent}/>
        <TapsDisplay content= {data}/>
      </header>
    </div>
  );
}

export default App;
