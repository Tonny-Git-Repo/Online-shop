import React, { useEffect } from 'react'
import { ProductGeneralModel } from '../../models'
import { Products } from '../products/Products'
import './GridView.scss'

export const GridView: React.FC<{products: ProductGeneralModel[]}> = (props) =>{
    const [ products, setProducts ] = React.useState<ProductGeneralModel[]>(() => props.products)
    useEffect(() =>{
        setProducts((prev) => prev=props.products)
    },[])
    console.log(products)
    return(<div className='grid-view '>
        <div className="products-container">
            { products.map((product) =>{
                return <Products key={product.id} {...product}/>
            })}
        </div>
    </div>)
}