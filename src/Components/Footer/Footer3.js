import React from 'react'
import appstore from '../../asset/appstore.png'
import googleplay from '../../asset/googleplay.png'


const Footer3 = () => {
  return (
    <>
    <div className='grid md:grid-cols-2  '>
        <div className='p-5 font-mono'>
     
            <p className='text-[15px] font-mono mt-5'>© 2024 CoinDucko. All Rights Reserved </p>
            <p >Developed by <span className='text-orange-500 font-mono'>Godsent Oko-Ose.</span></p>
        </div>

        <div className='flex justify-center md:justify-end items-center'>

        <img src={googleplay} alt='googleplaylogo' className='w-[170px] h-[150px] cursor-pointer' />
        <img src={appstore} alt='appstorelogo' className='w-[170px] h-[60px] cursor-pointer ' />
       
        </div>
    </div>
     <div>
        
        <p className='text-[15px] font-light p-5 space-y-3'><span className='font-bold'>IMPORTANT DISCLAIMER:</span> All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on them. Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor before making any decision. No content on our Site is meant to be a solicitation or offer.</p>

     </div>
     </>
  )
}

export default Footer3