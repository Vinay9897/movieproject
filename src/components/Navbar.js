import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className='con'>
                <div className="header">
                    <h1 className='spacing text'> MOVIESTAR</h1>
                    <ul className='items'>
                        <li className=' item'><a href='#'>Favourite</a></li>
                        <li className=' item'><a href='#'>About</a></li>
                        <li className=' item'><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
