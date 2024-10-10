import cartActiontypes from './cart.types'

const cartAction = () => ({
    type: cartActiontypes.TOGGLE_CART_HIDDEN
})

export const addItem = (user) => ({
    type: cartActiontypes.ADD_ITEM,
    payload: user
})
export default cartAction;