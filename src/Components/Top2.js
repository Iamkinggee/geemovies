import React from 'react'
import './Footer.css'
import { FaSearch } from 'react-icons/fa';

const Top2 = () => {
  return (
    <div className='flex gap-20  justify-center items-center mt-3'>
    <div className='font-bold text-[8px] flex'>
        <h1>Cryptocurrencies</h1>
        <h1>Exchanges</h1>
        <h1>NFT</h1>
        <h1>Learn</h1>
        <h1>Products</h1>
    </div>
      <div >
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
        <FaSearch />
      </button>
    </div>
    </div>
  )
}

export default Top2