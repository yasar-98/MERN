import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard' 

function App() {
  return (
    <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
  );
}

export default App;
