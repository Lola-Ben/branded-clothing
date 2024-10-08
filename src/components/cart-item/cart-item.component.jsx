import React from "react";

import './cart-item.styles.scss'

const  CartItem = ({item: {ImageUrl, price, name, quantity } }) => (
    <div className="cart-item-container">
        <image src={ImageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;
