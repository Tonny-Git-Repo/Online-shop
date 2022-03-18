import { SingleProductModel } from "../models";
import { ProductContextValue } from "../contexts/ProductContext";
import * as actions from './actions'

export const openSideBar = () => ({
    type: actions.SIDEBAR_OPEN,
    payload: null
});

export const closeSideBar = () =>({
    type: actions.SIDEBAR_CLOSE,
    payload: null
});

export const getProductSuccess = (products: []) =>({
    type: actions.GET_PRODUCTS_SUCCESS,
    payload: products
})

export const getSingleProductBegin = () => ({
    type: actions.GET_SINGLE_PRODUCT_BEGIN,
    payload: null
})