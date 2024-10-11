import Image from "next/image";
import TShirt from "@/images/Tshirt.png";
import Carousel from "../Carousel/Carousel";
import SewingTape from "@/images/SewingTape.png";
import ButtonList from "../ButtonList/ButtonList";
import Paint from "@/images/Paint.png";
import Link from 'next/link';
import FloatingButton from "../FloatingButton/FloatingButton";
import ArrowCircle from '/public/images/ArrowCircleRight.png';
import Brand from "../Brand/Brand";

const Product: React.FC = () => {

    const description:string = "Element is a renowned skateboarding and lifestyle brand that was founded in 1992. The brand is inspired by the four natural elements—wind, water, fire, and earth—and has grown from its underground roots in the skateboarding scene to a globally recognized name. Element's iconic logo features a tree, symbolizing strength, wisdom, and connection with nature, and it reflects the brand's ethos of blending urban and natural environments."

    const stringList = [
        <Image key={1} src={TShirt} alt="T-shirt" />
    ];

    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

    return (
        <div className="w-full">
            <div className="md:flex">
                <div className=" md:w-1/2">
                    <Carousel items={stringList} />
                </div>
                <div className="md:w-1/2 md:pl-14">
                    <div className="text-center md:pt-10 md:p-5 md:text-start">
                        <h2 className="text-white font-inter text-3xl font-bold mb-3">Camiset Element</h2>
                        <h3 className="text-white font-inter text-3xl font-bold mb-4">R$ 299,99</h3>
                        <p className="text-white font-inter text-xl">6x de R$60,99</p>
                        <p className="text-white font-inter text-xl">5% de desconto a vista!</p>
                    </div>
                    <div className="flex mt-7 p-5 text-center items-center justify-start ">
                        <Image key={10} src={SewingTape} alt="fita" />
                        <h4 className="text-white font-inter text-2xl font-bold ml-2">Tamanho</h4>
                        <p className="underline text-gray-300 font-inter ml-6">ver medidas</p>
                    </div>
                    <div className="flex ">
                        <ButtonList />
                    </div>
                    <section className="p-5 text-center items-center justify-start">
                        <div className="flex">
                            <Image key={10} src={Paint} alt="fita" />
                            <h5 className="text-white font-inter text-2xl font-bold ml-2">Cor</h5>
                        </div>
                        <div className="flex p-5 ">
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
                   <FloatingButton/>
                    <Link
                        href=""
                        className={'hidden md:flex bg-primary-green md:w-80 w-full ml-12 h-12 text-center justify-center items-center cursor-pointer transition-opacity duration-500'}>
                        <p className="text-2xl font-black font-inter mr-3">COMPRAR</p>
                        <Image src={ArrowCircle} alt="arrow circle" className="w-10 h-10" />
                    </Link>
                </div>
            </div>
            <Brand description={description} name="ELEMENT" styleH1="text-4xl md:text-5xl font-brush" styleP="font-inter md:text-2xl" key={1}/>
        </div>
    );
}

export default Product;
