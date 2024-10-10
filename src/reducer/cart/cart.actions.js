import cartActiontypes from './cart.types'

const cartAction = () => ({
    type: cartActiontypes.TOGGLE_CART_HIDDEN
})

export const addItem = (user) => ({
    type: cartActiontypes.ADD_ITEM,
    payload: user
})

export const removeItem = item => ({
    type: cartActiontypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: cartActiontypes.CLEAR_ITEM_FROM_CART,
    payload: item,
})
export default cartAction;