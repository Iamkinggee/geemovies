
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaLink } from "react-icons/fa6";
import { RiShapesFill } from "react-icons/ri";
import { BiCoin } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoImageSharp } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import { FaCubes } from "react-icons/fa6";
import { AiOutlineLineChart } from "react-icons/ai";

export default function Product() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-left">
      <Menu as="div" className="relative inline-block text-left" onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
        <div>
          <Menu.Button className=" inline-flex w-full justify-center rounded-md bg-black/5 px-4 py-2 text-sm font-bold text-white  hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 border-none">
         NFT
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          show={isMenuOpen}
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 shadow-lg rounded-md bg-white  focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-300 text-black font-bold' : 'text-gray-900'
                    } group flex w-full items-center  px-2 py-2 text-sm border-none font-bold  rounded-md`}
                  >

                    {/* icon */}

                    {active ? (
                    <IoImageSharp 
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <IoImageSharp 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                NFT floor Price
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-300 text-black font-bold' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm border-none font-bold`}
                  >
                    {active ? (
                    <BiCoin 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <BiCoin 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    NFT related Coins
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                 <button
                 className={`${
                   active ? 'bg-gray-300 text-black font-bold' : 'text-gray-900'
                 } group flex w-full items-center rounded-md px-2 py-2 text-sm border-none font-bold`}
               >
                    {active ? (
                    <AiFillStar
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiFillStar
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    NFT Watchlist
                  </button>
                )}
              </Menu.Item>
            </div>
    
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}













