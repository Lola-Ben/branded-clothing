import React from "react";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../reducer/cart/cart.selectors";
import  toggleCartHidden  from "../../reducer/cart/cart.actions"



import { CartDropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessageContainer } from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, dispatch}) => {
    const navigate = useNavigate();
    return(
    <CartDropdownContainer className="cart-dropdown-conta`iner">
        <CartItemsContainer>
          { 
          cartItems.length ?
           cartItems.map(cartItem => 
           ( <CartItem key={cartItem.id} item={cartItem} />)
          ):
          <EmptyMessageContainer >Your cart is empty</EmptyMessageContainer>
          }
        </CartItemsContainer>
        <CartDropdownButton  onClick={() => {
            navigate("/checkout")
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)}

const mapStateToProps = createStructuredSelector( {
    cartItems: selectCartItems
})


export default connect(mapStateToProps)(CartDropdown);