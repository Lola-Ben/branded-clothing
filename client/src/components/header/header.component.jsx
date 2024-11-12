import React from 'react';
import { Outlet} from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';


import {ReactComponent as Logo } from '../../asset/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';
import selectCurrentUser from '../../reducer/user/user.selectors';
import { selectCartHidden } from '../../reducer/cart/cart.selectors';
import {signOutStart} from "../../reducer/user/user.action"

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './header.styles';


const Header = () => {
  const dispatch = useDispatch();
  const hidden = useSelector(selectCartHidden);
  const currentUser = useSelector(selectCurrentUser)

  
  return(
   <>
    <HeaderContainer>
        <LogoContainer  to="/">
        <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer >
            <OptionLink to='/shop' >Shop</OptionLink>            
          {
            
          currentUser ? 
            <OptionLink  as="div" onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink> 
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

)}



export default (Header);