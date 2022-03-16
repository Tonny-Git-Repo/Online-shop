import { Link } from "react-router-dom";
import { Routing } from "../../App";
import './PageHero.scss'

export const PageHero: React.FC<{title: string}> = ({title}) =>{

    return(<div className="page-hero">
        <div className= 'section-center'>
            <h3>
                <Link to ={`${ Routing.HomePage}`} >Home</Link> / {title}
            </h3>
        </div>
    </div>)
}