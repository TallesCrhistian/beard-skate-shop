import Image from "next/image";
import TShirt from "@/images/Tshirt.png";
import Carousel from "../Carousel/Carousel";
import SewingTape from "@/images/SewingTape.png";
import ButtonList from "../ButtonList/ButtonList";

const Product: React.FC = () => {

    const stringList = [
        <Image key={1} src={TShirt} alt="T-shirt" />
    ];

    return (
        <div className="w-full">
            <Carousel items={stringList} />
            <div className="text-center">
                <h2 className="text-white font-inter text-3xl font-bold mb-3">Camiset Element</h2>
                <h3 className="text-white font-inter text-3xl font-bold mb-4">R$ 299,99</h3>
                <p className="text-white font-inter text-xl">6x de R$60,99</p>
                <p className="text-white font-inter text-xl">5% de desconto a vista!</p>
            </div>
            <div className="flex mt-7 p-5 text-center items-center justify-start">
                <Image key={10} src={SewingTape} alt="fita" />
                <h4 className="text-white font-inter text-2xl font-bold ml-2">Tamanho</h4>
                <p className="underline text-gray-300 font-inter ml-6">ver medidas</p>
            </div>
            <div className="flex">
                <ButtonList/>
            </div>
        </div>
    );
}

export default Product;
