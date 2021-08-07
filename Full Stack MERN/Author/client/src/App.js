import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"></Main>
        <New path="/new"></New>
        <Edit path="/edit/:id"></Edit>
      </Router>
    </div>
  );
}

export default App;
