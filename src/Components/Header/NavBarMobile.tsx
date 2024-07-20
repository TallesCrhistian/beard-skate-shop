import React from 'react';
import Image from 'next/image';
import NavBarLogo from "/public/images/NavBarLogo.png"
import ShoppingLogo from "/public/images/ShoppingLogo.png"
import SkateboardLogo from "/public/images/SkateboardLogo.png"

const NavBarMobile: React.FC = () => {
  return (
    <section className='flex bg-primary-black justify-between sm:hidden p-2'>
      <div>
        <Image src={NavBarLogo} alt='List'/>
      </div>
      <div className='flex'>
        <p className='font-brush text-white text-2xl text-center'>GPS Skate Shop</p>
        <Image src={SkateboardLogo} alt='SkateboardLogo'/>
      </div>
      <div className='flex justify-center items-center'>
      <Image src={ShoppingLogo} alt='ShoppingLogo' className='justify-center'/>
      </div>
    </section>
  );
};

export default NavBarMobile;