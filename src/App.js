import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import API from "./components/pages/API"
import Error from "./components/pages/Error"
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div style={{padding: 30}}>
        <Navbar />
      </div>
      <main id="main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/API" component={API} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
