import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Routing } from "../../App";

export const CartButtons: React.FC = () =>{

    return(<section className="cart-btn-wrapper">
    <Link to = {`${Routing.CartPage}`}>Cart
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