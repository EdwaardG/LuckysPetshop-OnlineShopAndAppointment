import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Lucky's Petshop</a>
        </div>
        <div>
            <a href="/cart">Cart </a>
            <a href="signin">Sign In</a>
        </div>
    </header>
    <main>
    <Route path="/cart/:id?" component={CartScreen}></Route>
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>
    </main>
    <footer className="row center">
        All Rights Reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
