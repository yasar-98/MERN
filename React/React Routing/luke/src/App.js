import logo from './logo.svg';
import './App.css';
import { Router  } from '@reach/router';
import { FormApi } from './components/FormApi';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormApi />
        <Router>
            <Result path="/:resource/:id"/>
        </Router>

      </header>
    </div>
  );
}

export default App;
