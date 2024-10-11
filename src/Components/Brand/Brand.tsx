import Button from "../Button/Button";
import { BrandType } from "./BrandType";

const Brand: React.FC<BrandType> = ({ name, description, styleH1, styleP }) => {
    return (
        <section className="flex flex-col mt-3 text-center justify-center items-center md:w-4/5 mx-auto p-4">
            <h1 className={`text-white p-8 ${styleH1}`}>{name}</h1>
            <p className={`text-white p-8 ${styleP}`}>{description}</p>
            <Button label={"VER MAIS"} href={"/"} styleLink={"w-80"} styleParaghaph={"text-xl"} styleImage={"w-12 h-12"} />
        </section>
    );
}

export default Brand;