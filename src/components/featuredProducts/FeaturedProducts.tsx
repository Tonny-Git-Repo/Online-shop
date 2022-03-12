import { Link } from "react-router-dom";
import { useProductsContext } from "../../contexts";

export const FeaturedProducts: React.FC = () =>{
    function show(){
    console.log(useProductsContext)
    }
    show()
    //const { featured_products } = useProductsContext
    return(<div >
    
    </div>)
}