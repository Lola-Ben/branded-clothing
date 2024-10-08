import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../reducer/cart/cart.selectors";
import { selectCartItemsTotal } from "../../reducer/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss'


const CheckoutPage = ({cartItems, total}) => (
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
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);