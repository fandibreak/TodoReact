# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Pasos de mi proyecto ##

1-- He creado la carpeta bacia con todoreact
2-- Con la terminal he aplicado <npx create-react-app todoreact> para la creacion del proyecyo base
3-- Ahora instalo el siguiente modulo para poder crear de una los componentes/carpetas de mi proyecto: 
<npm install --save-dev create-react-component-folder>
4-- Debo de estar dentro de la carperta SRC/Components que es la estatica del proyecto que me crea el comando paso <2>
5-- Ahora le doy la estructura de las carpetas/componentes de mi proyecto : 
 <npx crcf Footer Header Nav Main Item Itemlist -j>
6-- Ahora me voy a App.js y importo los modulos de los componentes creados Footer/Header/Item/Itemlist/Nav
<import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Item from './components/Item/Item';
import Itemlist from './components/Itemlist/Itemlist';>
7-- Ahora instalo el paquete  npm i react-router-dom para poder rutear las rutas y lo importo en App.js 
<import {BrowserRouter, Router, Switch } from 'react-router-dom'>
8-- Ahora invoco las rutas en App.js de la siguinte manera 
<div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
      <Footer/>
</div>
Nota : Que Main a su vez pintara todo lo que tiene linkado en su .jsx
Nota1: Defino la estructura de mi proyecto 

Componentes: 
- *HEADER (NAV)
- *MAIN (FORM con un input + boton "ADD")
    - **HOME (Welcome) 
    - **ITEMLIST
        - ***ITEM 
        - ***ITEM  
        - ***...
    - **WEATHER (Api de clima)
- *FOOTER  

9--Ahora como el ejercicio indica creo Home y wheater con <npx crcf Weather Home -j>
10--Ahora me voy a Nav e importo Link: <import { Link } from "react-router-dom";>
11--En nav.jsx linko mis rutas internas 
12--En main realizo los ruteos de : 
        <Route path="/" element={<Home />} exact />
        <Route path="/itemlist" element={<Itemlist />} />
        <Route path="/weather" element={<Weather />} />
13-Me voy a Header e importo Nav y lo aplico dentro de la estructura header         
<
import React, { Component } from 'react'
import Nav from '../Nav'

export class Header extends Component {
    render() {
        return (
            <header>
                <Nav/>
            </header>
        )
    }
}

export default Header
