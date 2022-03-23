import { Link } from "react-router-dom";
import { Routing } from "../../App";
import { SingleProductModel } from "../../models";
import './PageHero.scss'

export const PageHero: React.FC<{title: string, product: SingleProductModel}> = ({title, product}) =>{

    return(<div className="page-hero">
        <div className= 'section-center'>
            <h3>
                <Link to ={`${ Routing.HomePage}`} >Home</Link>/{product && <Link to={`${Routing.ProductPage}`}> Products / </Link> }  {title}
            </h3>
        </div>
    </div>)
}