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
} from '../reducers/actions'


export interface ProductContextValue{
    openSideBar: () => void,
    closeSideBar: () => void,
    isSideBarOpen: boolean,
    products_loading: boolean,
    products: ProductGeneralModel[], 
    featured_products: ProductGeneralModel[],
    product_error: boolean
}

let initialState: ProductContextValue = {
  openSideBar: function (): void {},
  closeSideBar: function (): void {},
  isSideBarOpen: false,
  products_loading: false,
  products: [],
  featured_products: [],
  product_error: false
}

const ProductsContext = React.createContext<ProductContextValue >({
    openSideBar: () => { },
    closeSideBar: () => { },
    isSideBarOpen: false,
    products_loading: false,
    products: [],
    featured_products: [],
    product_error: false
})

export const ProductsProvider: React.FC<ProductContextValue> = ({ children }) => {
    
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
        console.log(state)
      } catch (error) {
        console.log("in error")
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