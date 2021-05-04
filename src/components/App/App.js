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
        <LandingPage exact path={'/'} />
        <About path={'/about'} />
        <Portfolio path={'/portfolio'} />
        <Contact path={'/contact'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
