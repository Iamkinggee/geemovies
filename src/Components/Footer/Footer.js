import React from 'react'
import Logo from '../Logo'

const Footer = () => {
  return (
    // <div className='w-full flex mb-10 py-10'>
    <div className=' grid md:grid-cols-2  py-10 border-t-2 border-gray-200/5'>
      <div className=' justify-start'>
       <Logo className=''/>
      <p className='text-[15px] space-y-3 font-light text-gray-300 p-3'>
      CoinDucko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.
      </p>
      </div>


    
      <div className='py-10 gap-3 p-2 grid grid-cols-4 text-[15px]'>
    
        <div className=''>
          <h1 className='text-[15px] font-bold'>Resources</h1>
          <ul className='space-y-3 justify-start font-light list-none  py-5 cursor-pointer'>
            <li>Perpetuals</li>
            <li>Crypto News</li>
            <li>Bitcoin Treasury</li>
            <li>Crypto Heatmap</li>
            <li>Crypto Api</li>
          </ul>
        </div>
    
        <div className=''>
          <h1 className='text-[15px] justify-start font-bold'>Support</h1>
          <ul className=' space-y-3 justify-start font-light list-none  py-5 cursor-pointer'>
            <li>Request Form</li>
            <li>Advertising</li>
            <li>Help Center</li>
            <li>Bug Bounty</li>
            <li>FQA</li>
          </ul>
        </div>
    
        <div className=''>
          <h1 className='text-[15px] justify-start font-bold'>About CoinDucko</h1>
          <ul className=' space-y-3 justify-start font-light list-none  py-5 cursor-pointer'>
            <li>About us</li>
            <li>Careers <span className='bg-orange-400 text-black p-2 font-semibold rounded text-[12px]'>Join us</span></li>
            <li>Bitcoin Treasury</li>
            <li>Crypto Heatmap</li>
            <li>Crypto Api</li>
          </ul>
        </div>
    
        <div className=''>
          <h1 className='text-[15px] justify-start font-bold'>Community</h1>
          <ul className=' space-y-3 justify-start font-light list-none py-5 cursor-pointer'>
            <li>X/Twitter</li>
            <li>Telegram Chat</li>
            <li>Telegram News</li>
            <li>Instagram</li>
            <li>Discord</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>TikTok</li>
          </ul>
        </div>



      </div>

      </div>















  )
}

export default Footer