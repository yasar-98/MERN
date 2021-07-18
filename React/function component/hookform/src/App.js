import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import Result from './components/Result';
import React, {useState} from 'react';

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: ""
  });

  return (
    <div className="App">
      <UserForm inputs = {state} setInputs = {setState}/>
      <Result data= {state}/>
    </div>
  );
}

export default App;
