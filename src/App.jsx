
import React from 'react';
import './App.css';
import { Routes, BrowserRouter as Router, Route,} from 'react-router-dom';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
