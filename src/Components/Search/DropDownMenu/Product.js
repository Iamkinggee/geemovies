
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AiFillBank } from "react-icons/ai";
import { FaCubes } from "react-icons/fa6";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsListStars } from "react-icons/bs";
import { LiaTrophySolid } from "react-icons/lia";
import { PiShootingStarDuotone } from "react-icons/pi";


export default function Product() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-left">
      <Menu as="div" className="relative inline-block text-left" onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
        <div>
        <Menu.Button className=" inline-flex w-full justify-center rounded-md bg-black/5 px-4 py-2 text-sm font-bold text-white  hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 border-none">
          Cryptocurrencies
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
          <Menu.Items className="absolute lefht-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white  focus:outline-none">
            <div className="px-1 py-1">
            
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-300 text-black font-bold' : 'text-gray-900'
                    } group flex w-full items-center  px-2 py-2 text-sm border-none font-bold  rounded-md`}
                  >

                    {/* icon */}

                    {active ? (
                      <AiFillBank
                      
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiFillBank
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    Decentralized Exchanges
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
                      <FaCubes 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaCubes 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    Crypto Exchanges
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
                     <AiOutlineLineChart 
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineLineChart 
                        className="mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    Derivatives
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <h1 className='text-[15px] text-gray-500 font-light'>Popular</h1>
              </Menu.Item>

              










             
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-300 text-black font-bold' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm border-none font-bold`}
                  >
                    {active ? (
                     <BsListStars 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsListStars 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                 Highlight
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
                     <PiShootingStarDuotone 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <PiShootingStarDuotone 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    New Cryptocurrencies
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
                     <LiaTrophySolid 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <LiaTrophySolid 
                        className="mr-2 h-5 w-5  text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                Gainers & Losers
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
