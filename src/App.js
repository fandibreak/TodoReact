import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Item from './components/Itemlist/Item';
import Itemlist from './components/Itemlist/Itemlist';
import {BrowserRouter, Router, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
