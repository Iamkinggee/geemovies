import React from 'react';
import { AiFillBank } from "react-icons/ai";
import { FaCubes } from "react-icons/fa6";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsListStars } from "react-icons/bs";
import { LiaTrophySolid } from "react-icons/lia";
import { PiShootingStarDuotone } from "react-icons/pi";
import { BiCoin } from "react-icons/bi";
import { IoImageSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";


const MenuList = () => {


  return (
    <div className=' text-white  flex items-center justify-center '>
      <div className='w-full max-w-lg px-5  mx-auto bg-dark rounded shadow-xl'>
        <details>
          <summary> 
            <details className="w-full  border border-gray-500 rounded cursor-pointer mb-3 bg-black/5  ">
              <summary className="hover:text-orange-400 w-full font-bold  text-white flex justify-between px-4 py-3 after:content-['+']">Cryptocurrencies</summary>



                <ul className='px-4 py-3 '>
                  <li className='flex p-2  hover:bg-gray-300  hover:text-black rounded'><AiFillBank
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />Decentralized Exchanges</li>

                  <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'><FaCubes 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />Crypto Exchanges</li>
                  <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'> <AiOutlineLineChart 
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />Derivatives</li>

                      <p className='text-[15px] font-thin p-2 '>Popular</p>


                  <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'><BsListStars 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />HightLight</li>
                  <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'> <PiShootingStarDuotone 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />New Cryptocurrencies</li>

                      <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'>   <LiaTrophySolid 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />Gainers & Losers</li>
                </ul>
            </details>


            <details className="w-full  border border-gray-500 rounded cursor-pointer mb-3 bg-black/5 ">
              <summary className="hover:text-orange-400 w-full font-bold text-white flex justify-between px-4 py-3 after:content-['+']">Exchanges</summary>



                <ul className='px-4 py-3 '>
                  <li className='flex p-2  hover:bg-gray-300 rounded hover:text-black'>  <AiFillBank
                      
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />Decentralized Exchanges</li>

                  <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'><FaCubes 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />Crypto Exchanges</li>
                  <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'> <AiOutlineLineChart 
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />Derivatives</li>

                </ul>
            </details>




            <details className="w-full  border border-gray-500 rounded cursor-pointer mb-3 bg-black/5 ">
              <summary className="hover:text-orange-400 w-full font-bold  text-white flex justify-between px-4 py-3 after:content-['+']">NFT</summary>



                <ul className='px-4 py-3 '>
                  <li className='flex p-2  hover:bg-gray-300 rounded hover:text-black'>    <IoImageSharp 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />NFT floor Prices</li>

                  <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'>  <BiCoin 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />NFT related Coins</li>
                  <li className='flex p-2 hover:bg-gray-300 rounded hover:text-black'>  <AiFillStar
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />Nft Watchlist</li>

                </ul>
            </details>
          </summary>
        </details>    
      </div>
    </div>


  );
}

export default MenuList;
