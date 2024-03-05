import React from 'react'
import { AiOutlineStar } from "react-icons/ai";


const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <div className='flex'>
         <AiOutlineStar size={20} className='hidden  md:block'/> 
        <p className='text-[13px] px-2 font-normal  '>{props.coins.market_cap_rank}</p>
        </div>

        <div className='img-symbol flex w-10'>
            <img className='justify-start items-start -ml-20 w-8 h-8 ' src={props.coins.image} alt='/'/>
         <div className='flex justify-center items-center p-2'>       
            <p className=' font-semibold text-[13px] w-20'>{props.coins.name}</p>
            <p className=' text-[13px] '>{props.coins.symbol.toUpperCase()}</p></div>
        </div>


      <p>{parseFloat(props.coins.current_price).toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}</p>
      <p className='hide-mobile'>{parseFloat(props.coins.total_volume).toLocaleString()}%</p>
      <p className='hide-mobile'>${parseFloat(props.coins.market_cap).toLocaleString()}</p>



    </div>
  )
}

export default CoinItem