import Link from "next/link";
import Image from "next/image"
import { ButtonType } from "./ButtonType";
import ArrowCircle from '/public/images/ArrowCircleRight.png';

const Button: React.FC<ButtonType> = ({label, href, styleImage, styleLink, styleParaghaph}) => {
    return(
        <Link href={href} className={`bg-primary-green flex text-center justify-center items-center cursor-pointer ${styleLink}`}>
        <p className={`font-black font-inter mr-3 ${styleParaghaph}`}>{label}</p>
        <Image src={ArrowCircle} alt="arrow circle" className={`${styleImage}`} />
    </Link>
    );
}

export default Button;