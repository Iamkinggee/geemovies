import React from 'react'
import SearchBar from '../Search/SearchBar'

const Footer2 = () => {
  return (
    <div className=' grid md:grid-cols-2 border-gray-500/20 border-2'>
        <div className='p-5'>
            <h1 className='text-[17px] font-bold'>Interested to stay up-to-date with cryptocurrencies?</h1>
            <p className='text-[15px] font-light py-5'>Get the latest crypto news, updates, and reports by subscribing to our free newsletter.</p>
        </div>

        <div className='justify-center items-center m-auto'>
            <SearchBar placeholder="Enter Your Email" buttonType="text"  buttonColor="bg-orange-500" />
        </div>




    </div>
  )
}

export default Footer2