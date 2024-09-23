import React from 'react';
import {ReactComponent as Logo } from '../../asset/logo.svg';
import {Link, Outlet} from 'react-router-dom';
import './header.styles.scss'


const Header = () => (
   <>
    <div className='header'>
        <Link className='logo-container' to="/"><Logo className='logo' /></Link>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
        </div>
    </div>
    <Outlet/>
   </>

)

export default Header;