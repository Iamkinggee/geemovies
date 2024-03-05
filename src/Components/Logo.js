import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'
import duck from '../asset/duck.png'


const Logo = () => {
  return (
    < div className='flex'>
      

    <img src={duck} alt='logo' className='w-[60px] h-[50px] -mt-2 m-0 flex justify-center items-center' />
      <h1 className='text-[20px] m-0 '>
      Coin<span className='purple'>Ducko</span>
      </h1>
    

</div>
  )
}

export default Logo