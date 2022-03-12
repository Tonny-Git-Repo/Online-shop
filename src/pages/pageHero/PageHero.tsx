import { Link } from "react-router-dom";
import { Routing } from "../../App";

export const PageHero: React.FC<{title: string}> = ({title}) =>{

    return(<div className="page-hero">
        <div className= 'section-center'>
            <h3>
                <Link to ={`${ Routing.HomePage}`} >Home</Link> / {title}
            </h3>
        </div>
    </div>)
}