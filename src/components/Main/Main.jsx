import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Itemlist from '../Itemlist'
import Weather from '../Weather'
class Main extends Component {
  render() {
    return <main>
      <h3>Este es el Main Con sus Routes</h3>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/itemlist" element={<Itemlist/>} />
        <Route path="/weather" element={<Weather/>} />
      </Routes>
    </main>
  }
}

export default Main;
