import React from 'react';
import {ReactComponent as Logo } from '../../asset/logo.svg';
import {Link, Outlet} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';
import './header.styles.scss'


const Header = ({currentUser}) => (
   <>
    <div className='header'>
        <Link className='logo-container' to="/"><Logo className='logo' /></Link>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
            
          {
          currentUser ? 
            <div className='option' onClick={() => {signOut(auth)
                console.log("Sign out click")
            }}>SIGN OUT</div>
            :
            <Link className='option' to='/signIn'>SIGN IN</Link>
            }
        </div>
        <p>{currentUser ? currentUser.displayName : "No user yet"}</p>
    </div>
    <Outlet/>
   </>

)

export default Header;