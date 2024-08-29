import Image from "next/image"
import { CardProductType } from "./CardProductType";
import Line from '/public/images/Line.png';
import ArrowCircle from '/public/images/ArrowCircleRight.png';

const CardProduct: React.FC<CardProductType> = ({ conditition, imageAlt, imageSrc, name, price }) => {
    return (
        <div className="w-48 sm:w-60 flex flex-col justify-center items-center text-center p-3">
            <div className="p-2 flex justify-center border w-full items-center">
                <Image src={imageSrc} alt={imageAlt} />
            </div>
            <p className="text-white mt-2 mb-2">{name}</p>
            <Image src={Line} alt="line logo" />
            <p className="text-white mt-2">R$ {price}</p>
            <p className="text-white font-inter mb-2">{conditition}</p>
            <div className="bg-primary-green flex w-40 h-12 text-center justify-center items-center">
                <p className="text-base font-black font-inter mr-3">COMPRAR</p>
                <Image src={ArrowCircle} alt="arrow circle" className="w-6 h-6" />
            </div>

        </div>
    );
}

export default CardProduct;