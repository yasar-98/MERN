import './App.css';
import { Router } from '@reach/router';
import ProductDetail from './views/ProductDetail';
import Main from './views/Main';
import Update from './views/Update';

function App() {

  return (
    <div className="App">
        <Router>
          <Main path="/"/>
          <ProductDetail path="/products/:id" />
          <Update path="products/:id/edit"/>
        </Router>

    </div>
  );
}

export default App;
