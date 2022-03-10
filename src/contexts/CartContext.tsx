
import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/CartReducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../utils/actions'

const initialState = {}
export interface CartContextValue{}

const CartContext = React.createContext<CartContextValue>({})

export const CartProvider: React.FC = ({ children }) => {
  return (
    <CartContext.Provider value='cart context'>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}