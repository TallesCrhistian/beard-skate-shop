import Image from "next/image";
import FreeShippingLogo from "/public/images/FreeShippingLogo.png"
import HotPriceLogo from "/public/images/HotPriceLogo.png"
import CreditCardLogo from "/public/images/CreditCardLogo.png"
import Carousel from "@/Components/Carousel/Carousel";
import  ImageLarga from "/public/images/imageLarga.png"
import  ShapeImage from "/public/images/ShapeImage.png"
import CardProduct from "@/Components/CardProduct/CardProduc";

export default function Home() {

 const stringList = [<Image  className="w-full"  src={ImageLarga} alt="Test"/>, <Image className="w-full" src={ImageLarga} alt="Test"/>]

  return (
    <main className="bg-primary-black">
      <section>
        <div className="relative">
          <Carousel items={stringList} />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white rounded-2xl  text-opacity-90 w-64 h-16 font-brush text-3xl text-center bg-black bg-opacity-45">Clique Aqui</button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex mb-6 ml-6 mt-3 md:p-0 md:mb-3 md:ml-0 md:mt-3 md:w-1/3 md:mr-6 md:pl-4">
            <Image src={FreeShippingLogo} alt="FreeShippingLogo" className="w-10 h-10 mt-3 md:mt-0" />
            <p className="text-white ml-6 w-3/4 md:w-full font-inter text-start"><span className="font-bold text-lg">Frete Grátis</span> nas compras acima de R$189,90 para a regiões Sul & Sudeste e acima de R$300,00 para as demais.</p>
          </div>
          <div className="flex mb-6 ml-6 md:mb-3 md:ml-0 md:mt-3 md:w-1/3 md:mr-6">
            <Image src={HotPriceLogo} alt="HotPriceLogo" className="w-10 h-10" />
            <p className="text-white ml-6 w-3/4 md:w-full font-inter text-start">5% de <span className="font-bold text-lg">DESCONTO</span> nas compras a vista para as compras acima de R$ 199,99!</p>
          </div>
          <div className="flex ml-6 md:mb-3 md:ml-0 md:mt-3 md:w-1/3">
            <Image src={CreditCardLogo} alt="CreditCardLogo" className="w-10 h-10" />
            <p className="text-white ml-6 w-4/5 text-start font-inter">Parcelamento Mínimo de  R$80,00 | Até 12x <span className="font-bold text-lg">SEM JUROS</span>!</p>
          </div>
        </div>
      </section>
      <section className="mt-6">       
        <h1 className="text-white text-center font-black font-inter text-3xl mb-3 relative">
          Ofertas Especiais
          <span className="block mx-auto sm:w-1/2  mt-1 w-4/5 border-b-2 border-white"></span>
        </h1>
        <div className="flex flex-wrap justify-around">
          <CardProduct conditition="6x  de R$ 60,99
5% de desconto a vista!" imageAlt="shape" key={"test"} imageSrc={ShapeImage} price="299,99" name="Shape Santa Cruz
Maple  Canadense"/>
          <CardProduct conditition="6x  de R$ 60,99
5% de desconto a vista!" imageAlt="shape" key={"test"} imageSrc={ShapeImage} price="299,99" name="Shape Santa Cruz
Maple  Canadense"/>
 <CardProduct conditition="6x  de R$ 60,99
5% de desconto a vista!" imageAlt="shape" key={"test"} imageSrc={ShapeImage} price="299,99" name="Shape Santa Cruz
Maple  Canadense"/>
          <CardProduct conditition="6x  de R$ 60,99
5% de desconto a vista!" imageAlt="shape" key={"test"} imageSrc={ShapeImage} price="299,99" name="Shape Santa Cruz
Maple  Canadense"/>
<CardProduct conditition="6x  de R$ 60,99
5% de desconto a vista!" imageAlt="shape" key={"test"} imageSrc={ShapeImage} price="299,99" name="Shape Santa Cruz
Maple  Canadense"/>
          <CardProduct conditition="6x  de R$ 60,99
5% de desconto a vista!" imageAlt="shape" key={"test"} imageSrc={ShapeImage} price="299,99" name="Shape Santa Cruz
Maple  Canadense"/>
 <CardProduct conditition="6x  de R$ 60,99
5% de desconto a vista!" imageAlt="shape" key={"test"} imageSrc={ShapeImage} price="299,99" name="Shape Santa Cruz
Maple  Canadense"/>
          <CardProduct conditition="6x  de R$ 60,99
5% de desconto a vista!" imageAlt="shape" key={"test"} imageSrc={ShapeImage} price="299,99" name="Shape Santa Cruz
Maple  Canadense"/>
        </div>
      </section>
    </main>
  );
}
