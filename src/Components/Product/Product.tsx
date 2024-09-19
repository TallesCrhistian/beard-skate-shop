import Image from "next/image";
import TShirt from "@/images/Tshirt.png";
import Carousel from "../Carousel/Carousel";
import SewingTape from "@/images/SewingTape.png";
import ButtonList from "../ButtonList/ButtonList";
import Paint from "@/images/Paint.png";

const Product: React.FC = () => {

    const stringList = [
        <Image key={1} src={TShirt} alt="T-shirt" />
    ];

    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

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
            <section className="p-5 text-center items-center justify-start">
                <div className="flex">
                    <Image key={10} src={Paint} alt="fita" />
                    <h5 className="text-white font-inter text-2xl font-bold ml-2">Cor</h5>
                </div>
                <div className="flex p-5">
                    {colors.map((color, index) => (
                        <div key={index} className="flex flex-col items-center mr-4">
                            {/* Circulo */}
                            <div
                                className="w-8 h-8 rounded-full border-4"
                                style={{ borderColor: color }}
                            ></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Product;
