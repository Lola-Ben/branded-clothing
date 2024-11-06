import React from 'react';
import { Outlet} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {ReactComponent as Logo } from '../../asset/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';
import selectCurrentUser from '../../reducer/user/user.selectors';
import { selectCartHidden } from '../../reducer/cart/cart.selectors';
import {signOutStart} from "../../reducer/user/user.action"

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './header.styles';


const Header = ({currentUser, hidden, signOutStart}) => (
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
            <OptionLink  as="div" onClick={signOutStart}>SIGN OUT</OptionLink> 
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

const mapDispatchToProps = dispatch =>({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);