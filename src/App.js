import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Services from './components/Services';
import Footer from './components/Footer';
import Info from './components/Info';
import About from './components/About';
import Contact from './components/Contact';
import UpButton from './components/UpButton';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/" exact component={Services} />
        <Route path="/" exact component={Info} />
        <UpButton />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
