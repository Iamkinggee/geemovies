import React from 'react';
import './index.css';
import Footer from './Components/Footer/Footer';
import CoinStat from './Components/TOP/CoinStat';
import  NavLarge from './Components/TOP/NavLarge';
import InfoDisplay from './Components/TOP/InfoDisplay';
import Footer2 from './Components/Footer/Footer2';
import Footer3 from './Components/Footer/Footer3';
import PageNavigation from './PageNavigation';




const App = () => {


  return (
    <>   

     
      <CoinStat />
      < NavLarge />
      <InfoDisplay />
      <PageNavigation/>
      <Footer />
      <Footer2 />
      <Footer3 /> 
    </>
  );
};

export default App;
