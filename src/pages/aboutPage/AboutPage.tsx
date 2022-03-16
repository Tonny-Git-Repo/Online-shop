import { PageHero } from "../pageHero/PageHero";
import aboutImg from '../../assets/hero-bcg.jpg';
import './AboutPage.scss'

export const AboutPage: React.FC = () =>{

    return(<section>

        <PageHero title="about"/>

        <section className="about-page page section section-center">
            <img src= { aboutImg } alt= 'desk'/>
            <article>
                <div className="title">
                    <h2>Our story</h2>
                    <div className="underline"></div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Aspernatur cum, sed veritatis impedit doloribus quos quod 
                    ducimus similique ipsum culpa laboriosam sequi necessitatibus 
                    magnam cupiditate nostrum reiciendis eius consequuntur praesentium.
                </p>
            </article>
        </section>
    </section>)
}