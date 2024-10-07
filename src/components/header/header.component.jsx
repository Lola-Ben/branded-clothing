import React from 'react';
import {ReactComponent as Logo } from '../../asset/crown.svg';
import {Link, Outlet} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';
import { connect } from 'react-redux';
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
            }}>SIGN OUT</div>
            :
            <Link className='option' to='/signIn'>SIGN IN</Link>
            }
        </div>
    </div>
    <Outlet/>
   </>

)

const mapStateToProps = state => ({
   currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);