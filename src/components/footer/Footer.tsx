import { Link } from "react-router-dom";
import { Routing } from "../../App";
import { CartButtons } from "../cartButtons/CartButtons";
import './Footer.scss'

export const Footer: React.FC = () =>{

    return(<div className="footer">
        <h5> &copy; {new Date().getFullYear()}<span> ComfySloth</span></h5>
        <h5>All rights reserved</h5>
    </div>)
}