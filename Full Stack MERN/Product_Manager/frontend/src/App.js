import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm';
import axios from 'axios';
import ProductList from './components/ProductList';
import {useState, useEffect} from 'react'
import { Router } from '@reach/router';
import ProductDetail from './components/ProductDetail';
import Main from './components/Main';
import Update from './components/Update';

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
