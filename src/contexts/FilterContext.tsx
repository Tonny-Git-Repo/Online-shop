
import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/FilterReducer'
import { ProductGeneralModel } from '../models'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../reducers/actions'
import { useProductsContext } from './ProductContext'

const initialState = {
  filteredProducts: Array<ProductGeneralModel>(),
  allProducts: Array<ProductGeneralModel>(),
  

}
export interface FilterContextValue{
  filteredProducts: Array<ProductGeneralModel>,
  allProducts: Array<ProductGeneralModel>,
  loadProducts: boolean,
}

const FilterContext = React.createContext<FilterContextValue>({
  filteredProducts: Array<ProductGeneralModel>(),
  allProducts: Array<ProductGeneralModel>(),
  loadProducts: false,
})

export const FilterProvider: React.FC = React.memo(({ children }) => {
  const {products} = useProductsContext()
  const [ loadProducts, setLoadProducts ] = React.useState<boolean>(false)
  const [ allProducts , setAllProducts ] = React.useState<ProductGeneralModel[]>()
  const [ filteredProducts, setFilteredProdutcs ] = React.useState<ProductGeneralModel[]>()

  console.log(products+ "\n hier we are")

  useEffect(() =>{
    setLoadProducts((prev) =>prev= true);
    setAllProducts((prev) => prev = products);
    setFilteredProdutcs((prev) => prev= products);
    setLoadProducts((prev) =>prev = false);
  }, [products])

  const state = {filteredProducts, allProducts, loadProducts}
  console.log(state)
  return (
    <FilterContext.Provider value={{...state}}>
      {children}
    </FilterContext.Provider>
  )
});
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}