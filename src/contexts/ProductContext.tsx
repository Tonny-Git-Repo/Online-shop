import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/ProductReducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../utils/actions'


export interface ProductContextValue{
    openSideBar: () => void,
    closeSideBar: () => void
}

const initialState = {
    isSideBarOpen: false,
}

const ProductsContext = React.createContext<ProductContextValue>({
    openSideBar: () => { },
    closeSideBar: () => { },
})

export const ProductsProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)  ;

  const openSideBar = () => {
      dispatch({ type: SIDEBAR_OPEN});
  }

  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE});
  }

  return (
    <ProductsContext.Provider value = {{...state,  openSideBar, closeSideBar}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}