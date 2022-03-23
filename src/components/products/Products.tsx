import './Products.scss'
import { formatPrice } from '../../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Routing } from '../../App'

export const Products: React.FC<{key: string, image:string, name: string, price: number, id:string}> = (props) =>{

    const { image, name, price, id} = props

    return(<div className='products'>
        <div className='container'>
            <img src={image} alt={name} />
            <Link className='link' to={`${Routing.SingleProduct}/${id}`}>
                <FaSearch/>
            </Link> 
        </div>
        <br/>
        <footer >
            <h5>{name}</h5>
            <p>{formatPrice(price)}</p>
        </footer>
    </div >)
}