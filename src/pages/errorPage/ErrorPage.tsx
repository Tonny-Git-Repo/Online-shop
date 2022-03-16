import { Routing } from "../../App";
import { Link } from "react-router-dom";
import './ErrorPage.scss'

export const ErrorPage: React.FC = () =>{

    return(<section className="error-page">
      <section className="page-100">
        <h1>404</h1>
        <Link to = {`${Routing.HomePage}`} className="btn">Back to Home page</Link>
      </section>
    </section>)
}