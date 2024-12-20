import React from "react";
import { connect } from "react-redux";


import { clearItemFromCart, addItem, removeItem } from "../../reducer/cart/cart.actions";


import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from "./checkout-item.styles";

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) =>{ 
      const {name, price, quantity, imageUrl} = cartItem
    return(
    <CheckoutItemContainer >
        <ImageContainer>
        <img  src={imageUrl} alt="item"/>
        </ImageContainer>
        <TextContainer >{name}</TextContainer>
        <QuantityContainer >
            <div  onClick={() => removeItem(cartItem)}>&#10094;</div>
            {quantity}
            <div  onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>${price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButtonContainer>

    </CheckoutItemContainer>
)}


const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem);