import React from 'react';
import '../App.css';
import logo from '../logo/fclogo.png'

const Navbar = (props) => {
    return (
        <div className='nav'>
            
                
            <h3 id='navHeading'>Quiz App</h3>
            
            
            
            
            
            {props.children}
        </div>
    )
}

export default Navbar;


