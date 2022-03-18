import axios from 'axios'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { products_reducer as reducer} from '../reducers/ProductReducer'
import { products_url as url } from '../utils/constants'
import { ProductGeneralModel, SingleProductModel } from '../models'
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

import { getProductSuccess, getSingleProductBegin, openSideBar, closeSideBar } from '../reducers/actionsGenerator'

export interface ProductContextValue{
    toggleSideBar: () => void,
    fetchSingleProduct: (url:string) => Promise<void>,
    isSideBarOpen: boolean,
    productsLoading: boolean,
    products: ProductGeneralModel[], 
    featuredProducts: ProductGeneralModel[],
    productError: boolean, 
    singleProductLoading: boolean,
    singleProductError: boolean,
    singleProduct: SingleProductModel
}


/* const initialState: ProductContextValue = {
  openSideBar: function (): void {},
  closeSideBar: function (): void {},
  fetchSingleProduct: (url:string) => new Promise(()=>{}),
  isSideBarOpen: false,
  products_loading: false,
  products: [],
  featured_products: [],
  product_error: false, 
  single_product_loading: false,
  single_product_error: false,
  single_product: {
    name : '',
    price: 0,
    description: '',
    stock: 0,
    stars: 0,
    reviews: 0,
    id: '',
    company: '',
    images:[],
    category: '',
    colors:[],
    featured: false,
    shipping:false
  } 
}*/



const ProductsContext = React.createContext<ProductContextValue >({
    toggleSideBar: () => { },
    fetchSingleProduct: (url:string) => new Promise(()=>{}),
    isSideBarOpen: false,
    productsLoading: false,
    products: [],
    featuredProducts: [],
    productError: false, 
    singleProductLoading: false,
    singleProductError: false,
    singleProduct: {
      name : '',
      price: 0,
      description: '',
      stock: 0,
      stars: 0,
      reviews: 0,
      id: '',
      company: '',
      images:[],
      category: '',
      colors:[],
      featured: false,
      shipping:false
    }
})

export const ProductsProvider: React.FC<ProductContextValue> = ({ children }) => {
    const [ isSideBarOpen, setIsSideBarOpen ] = useState<boolean>(false)
    const [ productsLoading, setProductsLoading ] = useState<boolean>(false)
    const [ products, setProducts ] = useState<ProductGeneralModel[]>([])
    const [ featuredProducts, setFeaturedProducts ] = useState<ProductGeneralModel[]>([])
    const [ productError, setProductError ] = useState<boolean>(false)
    const [ singleProductLoading, setSingleProductLoading ] = useState<boolean>(false)
    const [ singleProductError, setSingleProductError ] = useState<boolean>(false)
    const [ singleProduct, setSingleProduct ] = useState<SingleProductModel>({
      name : '',
      price: 0,
      description: '',
      stock: 0,
      stars: 0,
      reviews: 0,
      id: '',
      company: '',
      images:[],
      category: '',
      colors:[],
      featured: false,
      shipping:false
    })
  
  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev)
  }

  
  
  const fetchData = async (url: string) =>{

      setProductsLoading(true)
     
      try {
        const productsRaw = await axios.get(url);
        const products = productsRaw.data;
        setProducts(products)
        const featuredProductsList = products.filter((product: ProductGeneralModel) =>{
          const { featured } = product
          if(featured){
            return product
          }
        })
        console.log(featuredProductsList)
        setFeaturedProducts(featuredProductsList)
        setProductsLoading(false)
      } catch (error) {
        setProductsLoading(false)
        setProductError(true)
      }
  }

  const fetchSingleProduct = async (url:string) => {
    setSingleProductLoading(true)


    try {
      const singleProductRaw = await axios.get(url)
      const singleProduct = singleProductRaw.data
     setSingleProduct(singleProduct)
     setSingleProductLoading(false)
    } catch (error) {
      console.log("in single product error")
      setSingleProductLoading(false)
      setSingleProductError(true)
    }
  }

  const state: ProductContextValue ={ toggleSideBar, fetchSingleProduct, isSideBarOpen, productsLoading, products, featuredProducts, productError, singleProductLoading,
    singleProductError,singleProduct}
  useEffect(()=>{
    fetchData(url)
  },[])
  
  
  return (
    <ProductsContext.Provider value = {{...state}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}