import React from 'react'
import './Footer.css'

const Top3 = () => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 items-center'>
        <div>
        <h1 className='text-[25px]  items-start'>Today's Cryptocurrency Prices by Market Cap</h1>
        <p className='text-[13px] pl-5'>The global crypto market cap is $1.98T, a 0.07% increase over the last day. 
        The total crypto market volume over the last 24 hours is $90.96B, which makes a 32.65% increase. The total volume in DeFi is currently $7.13B, 7.84% of the total crypto market 24-hour volume. The volume of all stable coins is now $82.49B, which is 90.69% of the total crypto market 24-hour volume.
        Bitcoin’s dominance is currently 51.58%, an increase of 0.13% over the day.</p>
        </div>

        <div className='text-end pr-5'>
            <h>Highlight</h>
        </div>


    </div>
  )
}

export default Top3