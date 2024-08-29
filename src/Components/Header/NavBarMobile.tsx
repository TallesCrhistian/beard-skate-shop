import React from 'react';
import Image from 'next/image';
import NavBarLogo from "/public/images/NavBarLogo.png"
import ShoppingLogo from "/public/images/ShoppingLogo.png"
import Logo from "/public/images/LogoBeard.png"
import Search from "/public/images/Search.png"

const NavBarMobile: React.FC = () => {
  return (
    <section className='flex bg-primary-black justify-between p-2 md:hidden'>
      <div>
        <Image src={NavBarLogo} alt='List'/>
      </div>
      <div className='flex justify-center items-center'>
        <Image src={Logo} width={50} height={50} alt='SkateboardLogo'/>
        <p className='font-brush text-white text-xl text-center ml-2'>Beard Skate Shop</p>
      </div>
      <div className='flex justify-center items-center'>
      <Image src={Search} alt='Search' className='justify-center'/>
      <Image src={ShoppingLogo} alt='ShoppingLogo' className=' ml-2 justify-center'/>
      </div>
    </section>
  );
};

export default NavBarMobile;