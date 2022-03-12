import { FeaturedProducts, Hero, Services, Contact } from "../../components"

export const HomePage: React.FC = () =>{

    return(<div>
      <Hero/>
      <FeaturedProducts/>
      <Services/>
      <Contact/>
    </div>)
}