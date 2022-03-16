import './Contact.scss'
export const Contact: React.FC = () =>{

    return(<div className="contact"> 
       <div className="section-center">
           <h3>Join our newsletter and get 20% off</h3>
           <div className="content">
               <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Dignissimos neque dolores dicta ipsam ut ipsa eveniet ullam 
                   optio eaque est?
               </p>
               <form className="contact-form">
                   <input type='email' className="form-input" placeholder="enter email"/>
                   <button type="submit" className="submit-btn">
                       subscribe
                    </button>
                </form>
            </div>
        </div>
    </div>)
}