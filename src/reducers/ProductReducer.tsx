import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
  } from './actions'
  import { createStore } from 'redux'

  import { ProductContextValue} from '../contexts/ProductContext'
 

 export const products_reducer = ( state:ProductContextValue, action: { type: string, payload: [] | null}) => {

    console.log(" in hier " +action.type)
    switch(action.type){
      case SIDEBAR_OPEN:
        return {...state, SIDEBAR_OPEN:true} as ProductContextValue

      case SIDEBAR_CLOSE:
        //console.log(" in false")
        return {...state, isSideBarOpen : false} as ProductContextValue
      

       case GET_PRODUCTS_BEGIN:
         return { ...state, products_loading: true} as ProductContextValue ;
      
      case GET_PRODUCTS_SUCCESS:
        
        const featured_products = action.payload;
        let featuredProducts = Array()

        if(featured_products){
          featuredProducts = featured_products.filter((product) =>{
            const { featured } = product;
            if(featured){
              return product;
            }
          })
        }
        return {...state, product_loading: false, products: action.payload, featured_products: featuredProducts} as ProductContextValue;

      case GET_PRODUCTS_ERROR:
        console.log("in error reducer")
        return {...state, products_loading: false, products_error: true} as ProductContextValue
      
      case GET_SINGLE_PRODUCT_SUCCESS:
        const singleProduct = action.payload
        //return {...state, singleProduct:singleProduct, single_product_loading: false} as ProductContextValue
        return state

      case GET_SINGLE_PRODUCT_BEGIN:
        return {...state, single_product_loading: true, product_error: false } as ProductContextValue

      case GET_SINGLE_PRODUCT_ERROR:
          console.log("in error reducer")
          return {...state, single_products_loading: false, single_products_error: true}  as ProductContextValue
      default:
        console.log(`action ${action.type} not found`);
    }
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
   //export const reducer = createStore(products_reducer)
