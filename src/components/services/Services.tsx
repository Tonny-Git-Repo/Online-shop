import { services } from "../../utils/constants"

export const Services: React.FC = () =>{

    return(<div className="services">
        <div className="section-center">
            <article className="header">
                <h3>
                    Custom furniture <br/>
                    Built only for you
                </h3>
                <p>
                    Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Ipsam nemo eum fugit 
                    culpa sequi quaerat tempora aliquid ex molestias odio.
                </p>
            </article>
            <div className="service-center">
                {services.map((service) => {
                    const { id, icon, title, text} = service
                    return(
                    <div key={id} className='service'>
                        <span className="icon"> { icon }</span>
                        <h4>{title}</h4>
                        <p>{ text }</p>
                    </div>)
                })}
            </div>
        </div>
    </div >)
}