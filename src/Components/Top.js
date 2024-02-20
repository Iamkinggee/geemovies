import React from 'react'
import './Footer.css'

const Top = () => {
  return (
    <div className='text-[12px] flex w-full justify-center items-center m-auto gap-10'>
        <p>Coins: <span className='font-bold'>12,343</span></p>
        <p>Exchanges: <span className='font-bold'>$934</span></p>
        <p>market Cap: <span className='font-bold'>$2.432T</span></p>
        <p>24h Vol: <span className='font-bold'>$102.432B</span></p>
        <p>Dominance:  <span className='font-bold'>BTC 49.1% ETH 17.2%</span></p>



    </div>
  )
}

export default Top