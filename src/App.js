import Footer from './components/Footer';
import Nav from './components/Nav'; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data';
import Bookinfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books}/>} />
        <Route path="/books/:id" render={() => <Bookinfo books={books}/>} />
        <Route path="/cart" render={() => <Cart/>} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
