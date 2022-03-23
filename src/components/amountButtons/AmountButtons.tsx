import { FaMinus, FaPlus } from 'react-icons/fa'
import './AmountButtons.scss'

export const AmountButtons: React.FC<{increase: () =>void, decrease:()=> void, amount: number}> = (props) =>{
console.log(props)
    return(<div className='amount-buttons amount-btsn'>
    <button className='amount-btn' onClick={props.decrease}><FaMinus/> </button>
    <h2 className='amount'> {props.amount}</h2>
    <button className='amount-btn' onClick={props.increase}><FaPlus/></button>
    </div>)
}