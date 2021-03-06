import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data';
import Bookinfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function removeFromCart(book) {
    console.log(cart);
    console.log(...[cart.filter((item) => item !== book)]);
    setCart(cart.filter((item) => item.id !== book.id))
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map((item) => {
      return item.id === book.id ?
        { ...item, quantity: +quantity } :
        item
    }))
  }

  function numberOfItems() {
    return cart.reduce((a, b) => a + b.quantity, 0)
  }

  useEffect(() => {
    // console.log(cart)
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav cartSize={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <Bookinfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" render={() =>
          <Cart cart={cart} changeQuantity={changeQuantity} remove={removeFromCart}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
