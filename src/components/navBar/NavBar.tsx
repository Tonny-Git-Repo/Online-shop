import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
//import { links } from '../../utils/constants';
import { Routing } from '../../App';
import { CartButtons } from '../cartButtons/CartButtons';
import { useProductsContext } from '../../contexts';
import './NavBar.scss'

export const NavBar: React.FC = () =>{

    const { openSideBar } = useProductsContext();

    return(<section className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                   <Link to={`${Routing.HomePage}`}>
                       <img src = { logo } alt = "comfy sloth" />
                   </Link>
                   <button type= "button" className='nav-toggle' onClick={() =>openSideBar()}>
                       <FaBars/>
                    </button>
            </div>
            <ul className='nav-links'>
                <li><Link to = {`${Routing.HomePage}`}>Home</Link></li>
                <li><Link to = {`${Routing.AboutPage}`}>About</Link></li>
                <li><Link to = {`${Routing.ProductPage}`}>Products</Link></li>
            </ul>
            <CartButtons/>
        </div>
    </section>
    )
}