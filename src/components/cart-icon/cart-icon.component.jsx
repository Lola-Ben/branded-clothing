import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {ReactComponent as ShoppingIcon} from "../../asset/122 shopping-bag.svg"
import toggleCartHidden from "../../reducer/cart/cart.actions"
import selectCartItemsCount from "../../reducer/cart/cart.selectors";


import { CartIconContainer, ItemCountContainer } from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCountContainer>{
        itemCount
        }</ItemCountContainer>
    </CartIconContainer>
)}

const mapDispatchToProps = dispatch => ({

    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
       
      itemCount: selectCartItemsCount

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);