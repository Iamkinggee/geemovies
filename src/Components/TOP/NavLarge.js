import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Exchanges from '../Search/DropDownMenu/Exchanges';
import Product from '../Search/DropDownMenu/Product';
import NFT from '../Search/DropDownMenu/NFT'
import SearchBar from '../Search/SearchBar';
import LogoLink from '../LogoLink';
import MenuList from '../MobileMenu/MenuList';
import {useState,  useEffect } from 'react';


function NavLarge() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to  desired breakpoint
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize once to set the initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='font-[13px] grid grid-cols-1 md:grid-cols-3 border-2 border-gray-700/30 mt-7 md:justify-between md:items-center m-auto'>
       <div className='mt-8 justify-center items-center m-auto'>

       <LogoLink />
        </div>
      {isMobile ? (
        <MenuList />
      ) : (
        <>
         
            <div className='hidden font-bold text-[8px] md:flex z-10 py-5  md:justify-center md:items-center md:m-auto'>
              <h1><Product /></h1>
              <h1><Exchanges /></h1>
              <h1><NFT /></h1>
            </div>
     

          <div className='p-5'>
            <SearchBar placeholder="Coin Search" buttonType="image" buttonColor="bg-orange-500" />
          </div>
        </>
      )}
    </div>
  );
}

export default  NavLarge;
