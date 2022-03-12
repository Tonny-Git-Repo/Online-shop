import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/ProductReducer'
import { products_url as url } from '../utils/constants'
import { ProductGeneralModel } from '../models'
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
    closeSideBar: () => void,
    isSideBarOpen: Boolean,
}

export const initialState = {
    isSideBarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    hello: "hey"
}

const ProductsContext = React.createContext<ProductContextValue >({
    openSideBar: () => { },
    closeSideBar: () => { },
    isSideBarOpen: true,
})

export const ProductsProvider: React.FC = ({ children }) => {
    
  const [ state, dispatch ] = useReducer(reducer, initialState)  ;

  
  const openSideBar = () => {
      dispatch({ type: SIDEBAR_OPEN , payload: null});
  }

  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE, payload: null});
  }
  
  const fetchData = async (url: string) =>{

      dispatch({ type: GET_PRODUCTS_BEGIN, payload: null})
     
      try {
        const productsRaw = await axios.get(url);
        const products = productsRaw.data;
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products})
        console.log(products)

      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR, payload: null})
      }
  }

  useEffect(()=>{
    fetchData(url)
  },[])
  
  
  return (
    <ProductsContext.Provider value = {{...state, openSideBar, closeSideBar}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}