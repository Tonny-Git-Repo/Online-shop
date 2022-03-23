import { SingleProductModel } from '../../models'
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../../contexts';
import { AmountButtons } from '../amountButtons/AmountButtons';
import './AddToCart.scss'
import React, { useState } from 'react';
import { Routing } from '../../App';

interface CartObject{
    colors: string[] | string, 
    id: string,  
    stock: number
}

export const AddToCart: React.FC< {props: CartObject }> = (props) =>{

    const [ activColor, setActivColor ] = useState<string | undefined >(() =>props.props.colors[0])
    const [ amount, setAmount ] = React.useState<number>(1)

    const increaseAmount = React.useCallback(() =>{
        setAmount((prev) => {
            if(prev >= props.props.stock) return prev
            
            return prev+1
        })
    },[amount])

    const decreaseAmount = React.useCallback(() =>{
        setAmount((prev) => {
            if(prev <= 1) return prev

            return prev-1
        })
    }, [amount])
    //console.log(activColor)
   //const [mainColor, setMainColor ] = useState<string | undefined>(() => props.colors[1])
    return(< div className='add-to-cart'>
        <div className="colors">
            <span> colors: </span>
            <div>
                {
                 Array.isArray(props.props.colors)? props.props.colors.map((color, index) =>{
                     return <button key={`${index}`} 
                     style={{background: color}} 
                     className ={`${activColor === color? "color-btn active" : "color-btn"}`}
                     onClick={() => setActivColor(color)}>
                         {activColor === color ? <FaCheck/> : null}
                     </button>
                 }) : <button className='color-btn active' style={{background: props.props.colors}}> <FaCheck/> </button>
                }
            </div>
        </div>
        <div className="btn-container">
            <AmountButtons amount={amount} increase = {increaseAmount} decrease = {decreaseAmount}/>
            <Link to={`${Routing.CartPage}`} className="btn">add to cart</Link>
        </div>
    </ div>)
}