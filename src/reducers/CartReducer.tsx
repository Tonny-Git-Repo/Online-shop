import {
    ADD_TO_CART,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
  } from '../utils/actions'
  
  const cart_reducer = (state: {}, action:{ type: string}) => { //will define the model of it
    return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default cart_reducer