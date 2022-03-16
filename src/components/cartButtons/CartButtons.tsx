import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Routing } from "../../App";
import { useProductsContext } from "../../contexts/ProductContext";
import './CartButtons.scss'

export const CartButtons: React.FC = () =>{
    const { closeSideBar } = useProductsContext()
    return(
    <section className="cart-buttons cart-btn-wrapper">
       <Link className="cart-btn" to = {`${Routing.CartPage}`} onClick={() => closeSideBar()}>Cart
           <span className="cart-container">
              <FaShoppingCart/>
              <span className="cart-value">
                 10
              </span>
          </span>
       </Link>
       <button className="auth-btn">
           Login <FaUserPlus/>
       </button>
    </section>)
}