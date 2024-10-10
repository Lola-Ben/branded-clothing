import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {ReactComponent as Logo } from '../../asset/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';
import selectCurrentUser from '../../reducer/user/user.selectors';
import { selectCartHidden } from '../../reducer/cart/cart.selectors';

import './header.styles.scss'


const Header = ({currentUser, hidden}) => (
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
            <CartIcon />
        </div>
        {
          hidden ? null : <CartDropdown />
        }
    </div>
    <Outlet/>
   </>

)

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);