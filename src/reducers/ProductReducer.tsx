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
  
  const products_reducer = (state: {}, action: { type: string}) => {
    switch(action.type){
      case SIDEBAR_OPEN:
        console.log("Sidebar open");
        return { ...state, isSidebarOpen: true};

      case SIDEBAR_CLOSE:
        return { ...state, isSidebarOpen: false};

        default:
        console.log("Nothing founded");
    }
    return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default products_reducer