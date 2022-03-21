import './SingleProductPage.scss'
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom'
import { useProductsContext } from '../../contexts'
import { single_product_url as url } from '../../utils/constants'
import { Routing } from '../../App'
import { formatPrice } from '../../utils/helpers'

import {
    Loading,
    Error,
    ProductImages,
    AddToCart,
    Stars
} from '../../components'
import { PageHero } from '../pageHero/PageHero'
import { useEffect } from 'react'
import { SingleProductModel } from '../../models'

export const SingleProductPage: React.FC = () =>{
    const id = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        fetchSingleProduct(`${url}${id.id}`)
    },[id])

    const { fetchSingleProduct, singleProduct: product, singleProductLoading:loading, singleProductError: error } = useProductsContext()

    useEffect(()=>{
        if(error){
            console.log("in effect error")
            setTimeout(()=>{
                navigate(`${Routing.HomePage}`)
            }, 3000)
        }
    },[error])

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }

    const {
        name,
        price,
        description,
        stock,
        stars,
        reviews,
        id: sku,
        company,
        images,
        category,
    } = product

   console.log(images)
    
    return(<div className='single-page' >
      <PageHero title={name} product={product}/>
        <div className="section section-center page">
            <Link to={`${Routing.ProductPage}`} className="btn"> back to products</Link>
            <div className="product-center">
            <ProductImages imageList = {images}/>
            <div className="content">
                <h2>{name}</h2>
                < Stars stars= {stars} reviews={reviews}/>
                <h5 className='price'>{formatPrice(price)}</h5>
                <p className='desc'>{description}</p>
                <p className='info'>
                    <span>Available : </span>
                    { stock > 0? 'In stock': 'out of Stock'}
                </p>
                <p className='info'>
                    <span>SKU : </span>
                    { sku }
                </p>
                <p className='info'>
                    <span>Brand : </span>
                    { company}
                </p>
                <hr />
                {stock > 0 && <AddToCart props = {product}/>}
            </div>
        </div>
        </div>
    </div >)
}