import { Url } from "url"

export interface ProductGeneralModel {
    id: string,
    name: string,
    price: string,
    image: Url,
    colors: [string],
    company: string,
    description: string,
    category: string,
    shipping: boolean,
    featured: boolean
}

export type SingleProductModel = {

}