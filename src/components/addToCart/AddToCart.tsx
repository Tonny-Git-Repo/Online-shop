import { SingleProductModel } from '../../models'
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../../contexts';
import { AmountButtons } from '../amountButtons/AmountButtons';
import './AddToCart.scss'
import { useState } from 'react';

export const AddToCart: React.FC<{colors: string[] | string, id: string,  stock: number}> = (props) =>{

    const [ colors, setColors ] = useState<string[] | string>(()=>props.colors)
    console.log(colors)
   //const [mainColor, setMainColor ] = useState<string | undefined>(() => props.colors[1])
    return(<>
    AddToCard
    </>)
}