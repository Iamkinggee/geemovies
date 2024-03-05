import React, { useState } from 'react';

const CryptoInfo = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const excerpt = `Today's Cryptocurrency Prices by Market Cap
    The global crypto market cap is $1.98T, a 0.07% increase over the last day. 
    The total crypto market volume over the last 24 hours is $90.96B, which makes a 32.65% increase. 
    The total volume in DeFi is currently $7.13B, 7.84% of the total crypto market 24-hour volume. 
    The volume of all stable coins is now $82.49B, which is 90.69% of the total crypto market 24-hour volume. 
    Bitcoin’s dominance is currently 51.58%, an increase of 0.13% over the day.`;

  const handleReadMore = () => {
    setShowFullInfo(true);
  };

  const handleHide = () => {
    setShowFullInfo(false);
  };

  return (
    <div className='font-regular text-[15px] text-gray-400 '>
      {showFullInfo ? (
        <div>
          {excerpt}{' '}
          <button onClick={handleHide} className='font-bold bg-transparent border-none text-orange-500 hover:text-orange-300'>Hide</button>
        </div>
      ) : (
        <div>
          {excerpt.slice(0, 100)}...{' '}
          <button onClick={handleReadMore} className='font-bold bg-transparent border-none text-orange-500 hover:text-orange-300'>Read More</button>
        </div>
      )}
    </div>
  );
};

export default CryptoInfo;
