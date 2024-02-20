import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom'
import duck from '../asset/duck.png'

const navbar = () => {
  return (
    <Link to='/'>
        < div className='navbar'>
            {/* <FaCoins className='icon' size={30}/> */}


            <img src={duck} alt='logo' className='logo' />
              <h1>
              Coin<span className='purple'>Ducko</span>
              </h1>
            

        </div>
    </Link>
  )
}

export default navbar