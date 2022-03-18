import logo from '../../assets/logo.svg';
import { Routing } from '../../App';
import { FaTimes } from 'react-icons/fa';
import  { useProductsContext, useUserContext } from '../../contexts/index';
import { CartButtons } from '../cartButtons/CartButtons';
import { Link } from 'react-router-dom';
import './SideBar.scss'



export const SideBar: React.FC = () =>{

    const  { isSideBarOpen, toggleSideBar } = useProductsContext();
    //console.log(`in side bar ${isSideBarOpen}`)
    return(<div className='side-bar'>
        <aside className={`${isSideBarOpen? 'sidebar show-sidebar': 'sidebar'}`}>
            <div className='sidebar-header'>
                <img src={ logo } className='logo' alt ='comfy sloth' />
                <button className='close-btn'  onClick={toggleSideBar}>
                    <FaTimes/>
                </button>
            </div>
            <ul className='links'>
                <li onClick={toggleSideBar}><Link to={`${Routing.HomePage}`}>Home</Link></li>
                <li onClick={toggleSideBar}><Link to= {`${Routing.AboutPage}`}>About</Link></li>
                <li onClick={toggleSideBar}><Link to={`${Routing.ProductPage}`}>Products</Link></li>
                <li onClick={toggleSideBar}><Link to={`${Routing.CheckoutPage}`}>Checkout</Link></li>
            </ul>
            <CartButtons />
        </aside>
    </div>)
}