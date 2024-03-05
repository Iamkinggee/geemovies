import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './Components/Coins';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Coin from './Components/routes/Coin';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";



const PageNavigation = () => {


    const [coins, setCoins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    const fetchNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const fetchPreviousPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const fetchPage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=false&locale=en`;
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
          setCoins(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [currentPage]);
  
    const totalPages = 10; 
    // Assuming there are 10 pages




  return (
    <div>
           <Routes>
        <Route path="/" element={<Coins coins={coins} fetchNextPage={fetchNextPage} fetchPreviousPage={fetchPreviousPage} fetchPage={fetchPage} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>

     <div className=' w-full text-center flex justify-center items-center m-auto'>
     <button onClick={fetchPreviousPage}><GrFormPrevious size={30} className='hover:bg-orange-500/90 rounded-lg '/></button>
     <div>
     

{Array.from(Array(totalPages).keys()).map((pageNumber) => (
        <button
          className={`text-[15px] p-2 hover:bg-gray-500/40 rounded-lg ${
            pageNumber + 1 === currentPage ? 'bg-gray-500/40' : ''
          }`}
          key={pageNumber}
          onClick={() => fetchPage(pageNumber + 1)}
        >
          {pageNumber + 1}
        </button>
      ))}

        
      </div>
      <button onClick={fetchNextPage}><GrFormNext size={30} className='hover:bg-orange-500/90 rounded-lg'/></button>
 
     </div>









    </div>
  )
}

export default PageNavigation