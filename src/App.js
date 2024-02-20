import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './Components/Coins';
import  Navbar from './Components/Navbar';
import './index.css'
import { Route, Routes } from 'react-router-dom'; 
import Coin from './Components/routes/Coin'
import Footer from './Components/Footer';
import Top from './Components/Top'
import Top2 from './Components/Top2'
import Top3 from './Components/Top3'

const App = () => {

  const[coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'

  useEffect(()=>{
    axios.get(url).then((response)=> {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error)=>{
      console.log(error)
    })
    },[])



  return (
    <>
    <Navbar/>
    <Top/>
    <Top2/>
    <Top3/>
    <Routes>
      <Route path='/' element={  <Coins coins={coins} />}/>

      <Route path='/coin' element={<Coin/>}>
       <Route path=':coinId' element={<Coin/>}/>
      </Route>
    </Routes>


  
    <Footer/>
    </>
  )
}

export default App