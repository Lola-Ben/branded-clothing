import React from "react";
// import {connect} from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
// import CartItem from "../cart-item/cart-item.component";



import "./cart-dropdown.styles.scss"


const CartDropdown = () => (
    <div className="cart-dropdown-container">
        <div className="cart-items">
           
        </div>
        <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>
)



export default CartDropdown;