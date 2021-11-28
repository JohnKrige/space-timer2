import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Stopwatch from './components/Stopwatch/Stopwatch';
import ChainTimer from './components/ChainTimer/ChainTimer';
import Navbar from './components/Nav/Navbar';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="logo">Spacetimer</h1>
          <Navbar />
        </header>
          <Switch>
            <Route path="/countdown-timer">
              <CountdownTimer />
            </Route>
            <Route path="/stopwatch">
              <Stopwatch />
            </Route>
            <Route path="/timer-chain">
              <ChainTimer />
            </Route>
            <Redirect to="/countdown-timer" />
          </Switch>
      </Router>
    </div>
  );
};

export default App;
