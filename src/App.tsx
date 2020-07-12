import React from 'react';
import './App.css';
import Kitties from './components/Kitties';
import Puppies from './components/Puppies';
import ShoppingCart from './components/ShoppingCart';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { StateProvider } from './context';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <StateProvider>
    <div className="App">
      <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/kitties"><Button variant="contained" color="primary">Kitties</Button></Link></li>
          <li><Link to="/puppies"><Button variant="contained" color="primary">Puppies</Button></Link></li>
        </ul>
      </nav>
      <section className="main">
        <Route exact path="/" component={Kitties}/>
        <Route path="/kitties" component={Kitties}/>
        <Route path="/puppies" component={Puppies}/>
      <ShoppingCart />
      </section>
      </Router>
    </div>
    </StateProvider>
  );
}

export default App;
