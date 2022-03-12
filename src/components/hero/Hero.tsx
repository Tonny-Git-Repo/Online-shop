import heroBcg from '../../assets/hero-bcg.jpg'
import heroBcg2 from '../../assets/hero-bcg-2.jpg'
import { Link } from 'react-router-dom'
import { Routing } from '../../App'

export const Hero: React.FC = () =>{

    return(<div className='hero section-center'>
     <article className='content'>
         <h1> Design your<br/> Confort zone</h1>
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Dolor, reprehenderit aut vitae est doloribus ex? Labore 
             voluptatem soluta repellat rerum?
         </p>
         <Link to = {`${Routing.ProductPage}`} className ='btn hero-btn'>shop now</Link>
     </article>
     <article className='img-container'>
         <img src= {heroBcg} alt= "nice table" className='main-img'/>
         <img src= {heroBcg2} alt= "worker" className='accent-img'/>
     </article>
    </div>)
}