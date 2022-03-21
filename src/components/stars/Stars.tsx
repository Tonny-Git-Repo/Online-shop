import './Stars.scss'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

export const Stars: React.FC<{stars: number, reviews: number}> = (props) =>{

    const { stars, reviews } = props;

    const templateStars = Array.from({length: 5}, (_,index) =>{
        const number = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (<BsStarFill/>): stars >= number? (<BsStarHalf/>) : (<BsStar />) }
            </span>
        )
    })

    return(<div className='stars'>
        <div>{templateStars}</div>
        <p className="reviews">({reviews} customer reviews)</p>
    </div>)
}