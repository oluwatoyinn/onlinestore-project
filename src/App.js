import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/CartFolder/Cart';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Defaults from './components/Defaults';
import Modal from "./components/Modal"

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route  path="/details" component={Details} />
      <Route  path="/cart" component={Cart} />
      <Route component={Defaults} />
    </Switch>
    <Modal />
    </>
  );
}

export default App;
