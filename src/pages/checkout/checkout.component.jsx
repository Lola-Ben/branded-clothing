import React from "react";
import {  useSelector } from "react-redux";

import { selectCartItems } from "../../reducer/cart/cart.selectors";
import { selectCartItemsTotal } from "../../reducer/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


import './checkout.styles.scss'


const CheckoutPage = () =>{
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartItemsTotal)
    
    return(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="checkout-block">
                <span>Product</span>
            </div>
            <div className="checkout-block">
                <span>Description</span>
            </div>
            <div className="checkout-block">
                <span>Quantity</span>
            </div>
            <div className="checkout-block">
                <span>Price</span>
            </div>
            <div className="checkout-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.length ? cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />)            ) :
            (<div className="empty-message"> Your Cart is Empty </div>)

        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4000 0566 5566 5556 -Exp: 01/25 -CV: 123
        </div>
        <div className="button">
            <StripeCheckoutButton  price={total} />
        </div>
    </div>
)}



export default (CheckoutPage);