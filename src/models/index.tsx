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
    category: string,
    colors: string[],
    company: string,
    featured: boolean,
    description: string,
    id: string,
    images: string[],
    name: string,
    price: number,
    reviews: number,
    shipping: boolean,
    stars: number,
    stock: number
}