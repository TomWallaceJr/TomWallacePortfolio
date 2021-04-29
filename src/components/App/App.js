import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={LandingPage} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Portfolio} path="/portfolio" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
