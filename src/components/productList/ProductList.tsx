import React from "react"
import { useEffect } from "react"
import { useFilterContext } from "../../contexts"
import { ProductGeneralModel } from "../../models"
import { GridView } from "../gridView/GridView"

export const ProductList: React.FC = () =>{
    const { filteredProducts } = useFilterContext()
    console.log(filteredProducts)
    return(
      <GridView products={filteredProducts}>products list</GridView>
    )
}