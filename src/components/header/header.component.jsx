import React from 'react';
import { Outlet} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {ReactComponent as Logo } from '../../asset/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';
import selectCurrentUser from '../../reducer/user/user.selectors';
import { selectCartHidden } from '../../reducer/cart/cart.selectors';

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './header.styles';


const Header = ({currentUser, hidden}) => (
   <>
    <HeaderContainer>
        <LogoContainer  to="/">
        <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer >
            <OptionLink to='/shop' >Shop</OptionLink>
            <OptionLink to='/contact' >Contact</OptionLink>
            
          {
          currentUser ? 
            <OptionLink  as="div" onClick={() => {signOut(auth)
            }}>SIGN OUT</OptionLink> 
            :
            <OptionLink to='/signIn'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
          hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
    <Outlet/>
   </>

)

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);