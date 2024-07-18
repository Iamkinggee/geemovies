import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'

function Main() {
    const[movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]




// useEffect(()=>{
    
// const options = {
//     method: 'GET',
//      url: `${requests.requestsPopular}`,
//      headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzE2MTY2Y2I3MjA0OTNiZmI2MWIxMThlN2FlZGE1YiIsIm5iZiI6MTcyMTI4OTIwMi4wMjE5NTEsInN1YiI6IjY1MmZkZTFmMDI0ZWM4MDBhZWNlMTYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oMPdgGfTthJtneLkYBBznGnwSBJMIkNd1R4P1zEw8sw'
//     }
//   };
  
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data.results);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }, [])








useEffect(() => {
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: `${requests.requestsPopular}`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzE2MTY2Y2I3MjA0OTNiZmI2MWIxMThlN2FlZGE1YiIsIm5iZiI6MTcyMTI4OTIwMi4wMjE5NTEsInN1YiI6IjY1MmZkZTFmMDI0ZWM4MDBhZWNlMTYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oMPdgGfTthJtneLkYBBznGnwSBJMIkNd1R4P1zEw8sw'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            setMovies(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);








//  console.log(movie)


const truncateString =(str, num)=>{
    if(str?.length > num){
        return str.slice(0, num) + '...'
    } else {
        return str
    }
}




  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>

        </div>
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
            <button className='border  text-white ml-4 border-gray-300 py-2 px-5'>Watch Later</button>
        </div>
        <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
        <p className='w-full md:max-w-[700%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 150)}</p>


        </div>
     
    </div>
  )
}

export default Main