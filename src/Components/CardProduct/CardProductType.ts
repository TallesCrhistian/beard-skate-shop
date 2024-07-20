import { StaticImageData } from "next/image"

export interface CardProductType
{
    imageSrc : StaticImageData
    imageAlt: string
    name: string
    price: string
    conditition : string
}