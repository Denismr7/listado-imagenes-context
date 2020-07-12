import React from 'react';
import './App.css';
import Kitties from './components/Kitties';
import Puppies from './components/Puppies';
import ShoppingCart from './components/ShoppingCart';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { StateProvider } from './context'

function App() {
  return (
    <StateProvider>
    <div className="App">
      <Router>
      <nav>
        <ul>
          <li><Link to="/kitties">Kitties</Link></li>
          <li><Link to="/puppies">Puppies</Link></li>
        </ul>
      </nav>
        <Route exact path="/" component={Kitties}/>
        <Route path="/kitties" component={Kitties}/>
        <Route path="/puppies" component={Puppies}/>
      </Router>
      <ShoppingCart />
    </div>
    </StateProvider>
  );
}

export default App;
