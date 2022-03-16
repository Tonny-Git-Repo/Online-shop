import { Link } from "react-router-dom";
import { useProductsContext } from "../../contexts";
import './FeaturedProducts.scss'
import { Error } from "../errors/Error";
import { Loading } from "../loading/Loading";
import { Products } from "../products/Products";

export const FeaturedProducts: React.FC = () =>{
    const { products_loading: loading, product_error:error, featured_products:featured } = useProductsContext()
    if(error){
       return <Error/>
    }
    /* if(loading){
       return <Loading/>
    } */

    console.log(featured)
    return(<div className="featured-products section">
     <div className="title">
        <h2>Featured products</h2>
        <div className="underline"></div>
     </div>
     <div className="section-center featured">
        {featured.slice(1,4).map((product) =>{
           return <Products key={product.id} {...product}/>
        })}
     </div>
    </div>)
}