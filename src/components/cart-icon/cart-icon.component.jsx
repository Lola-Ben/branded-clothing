import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {ReactComponent as ShoppingIcon} from "../../asset/122 shopping-bag.svg"
import toggleCartHidden from "../../reducer/cart/cart.actions"
import selectCartItemsCount from "../../reducer/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartHidden, itemCount}) => {
    console.log(itemCount);
    return (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{
        itemCount
        }</span>
    </div>
)}

const mapDispatchToProps = dispatch => ({

    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
       
      itemCount: selectCartItemsCount

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);