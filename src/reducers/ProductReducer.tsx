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

  import { ProductContextValue} from '../contexts/ProductContext'
  
  const products_reducer = (state: { isSideBarOpen: boolean }, action: { type: string, payload:[] | null}) => {

    switch(action.type){
      case SIDEBAR_OPEN:
        console.log("Sidebar open");
        return { ...state, isSidebarOpen: true};

      case SIDEBAR_CLOSE:
        console.log(" in false")
        return { ...state, isSidebarOpen: false};

      case GET_PRODUCTS_BEGIN:
         return { ...state, products_loading: true};
      
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
        return {...state, product_loading: false, products: action.payload, featured_products: featuredProducts};

      case GET_PRODUCTS_ERROR:
        return {...state, products_loading: false, products_error: true}
      default:
        console.log("Nothing founded");
    }
    return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default products_reducer