import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Num from './components/Num';
import Word from './components/Word';
function App() {
  return (
    <div className="App">
      <Router>
            <Home path="/home"/>
            <Num path="/:id" />
            <Word path="/:str/:color/:background"/>

        </Router>
    </div>
  );
}

export default App;
