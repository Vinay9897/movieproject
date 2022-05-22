import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className='container'>
                <div className="header">
                    <h1 className='spacing'> MOVIESTAR</h1>
                    <ul className='items'>
                        <li className='item'><a href='#Favorite'>Favourite</a></li>
                        <li className='item'><a href='#About'>About</a></li>
                        <li className='item'><a href='#About'>Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
