import React, { Component } from 'react'
import Nav from '../Nav'
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <header className='navbar' >
                <Nav/>
            </header>
        )
    }
}

export default Header