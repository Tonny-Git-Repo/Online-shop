import logo from '../../assets/logo.svg';
import { Routing } from '../../App';
import { FaTimes } from 'react-icons/fa';
import  { useProductsContext, useUserContext } from '../../contexts/index';
import { CartButtons } from '../cartButtons/CartButtons';
import { Link } from 'react-router-dom';



export const SideBar: React.FC = () =>{
    const  {  closeSideBar, openSideBar } = useProductsContext();
    console.log(useProductsContext())
    const isOpen = true;
    return(<div>
        <aside className={`${isOpen? 'sidebar show-sidebar': 'sidebar'}`}>
            <div className='sidebar-header'>
                <img src={ logo } className='logo' alt ='comfy sloth' />
                <button className='close-btn' >
                    <FaTimes/>
                </button>
            </div>
            <ul>
                <li><Link to={`${Routing.HomePage}`}>Home</Link></li>
                <li><Link to= {`${Routing.AboutPage}`}>About</Link></li>
                <li><Link to={`${Routing.ProductPage}`}>Products</Link></li>
                <li><Link to={`${Routing.CheckoutPage}`}>Checkout</Link></li>
            </ul>
            <CartButtons/>
        </aside>
    </div>)
}