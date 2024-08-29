import React from 'react';
import Image from 'next/image';
import Account from "/public/images/Account.png"
import ShoppingLogo from "/public/images/ShoppingLogo.png"
import Logo from "/public/images/LogoBeard.png"

const NavBarMidScreen: React.FC = () => {
    return (
        <section className='hidden md:flex justify-between bg-primary-black p-2'>
            <div className='flex w-4/5 justify-center items-center pr-6'>
                <Image src={Logo} width={80} height={80} alt='SkateboardLogo' />
                <p className='font-brush text-white text-2xl ml-4'>Beard Skate Shop</p>
            </div>
            <div className="flex w-full items-center justify-between">
                <div className="relative flex-grow">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 17l-3.5 3.5a1 1 0 001.4 1.4L14 18.4m4-4.4a7.5 7.5 0 11-10.6-10.6 7.5 7.5 0 0110.6 10.6z" />
                        </svg>
                    </span>
                    <input type="text" placeholder="Pesquisar..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full" />
                </div>
            </div>
            <div className='flex w-2/4 justify-end'>
                <div className='flex justify-center items-center mr-8'>
                    <Image src={ShoppingLogo} alt='ShoppingLogo' className='justify-center' />
                </div>
                <div className='flex justify-end items-center mr-4'>
                    <Image src={Account} alt='AccountLogo' className='justify-center' />
                </div>
            </div>
        </section>
    );
};

  export default NavBarMidScreen;