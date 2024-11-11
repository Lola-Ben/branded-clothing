import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {ReactComponent as ShoppingIcon} from "../../asset/122 shopping-bag.svg"
import toggleCartHidden from "../../reducer/cart/cart.actions"
import selectCartItemsCount from "../../reducer/cart/cart.selectors";


import { CartIconContainer, ItemCountContainer } from "./cart-icon.styles";

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCountContainer>{
        itemCount
        }</ItemCountContainer>
    </CartIconContainer>
)}



export default (CartIcon);