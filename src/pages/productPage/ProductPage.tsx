import { Filters, ProductList, Sort } from '../../components'
import { PageHero } from '../pageHero/PageHero'
import './ProductPage.scss'


export const ProductPage: React.FC = () =>{

    return(<main>
        <PageHero title="products" product={null} />
        <div className="product-page ">
            <div className="section-center products">
                <Filters/>
                <div>
                    <Sort/>
                    <ProductList/>
                </div>
            </div>
        </div>
    </main>)
}