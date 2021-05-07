import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Switch>
        <About exact path={'/'} />
        <Portfolio path={'/portfolio'} />
        <Contact path={'/contact'} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
