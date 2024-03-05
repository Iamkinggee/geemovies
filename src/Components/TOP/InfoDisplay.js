import React from 'react'

import CryptoInfo from '../Search/DropDownMenu/CryptoInfo'
import Switchbutton from '../Search/Switchbutton'

const InfoDisplay = () => {
  return (


<div className='grid md:grid-cols-2  pt-10 m-auto justify-center items-center'>
  <div className='p-5'>
    <h1 className='text-[25px] items-start'>Today's Cryptocurrency Prices by Market Cap</h1>
    <CryptoInfo />
  </div>
  <div className='flex md:justify-end pl-5'>
    <h1 className='text-[15px] font-semibold justify-end items-center  mt-6'>Highlight</h1>
    <Switchbutton/>
  </div>
</div>


  )
}

export default InfoDisplay