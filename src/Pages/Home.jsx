import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../requests'

function Home() {
  return (
    <>
        <Main/>
        <Row rowID='1'  title='Trending' fetchURL={requests. requestsPopular}/>
        <Row rowID='2' title='UpComing' fetchURL={requests. requestsPopular}/>
        <Row rowID='3'   title='Popular' fetchURL={requests. requestsPopular}/>
        <Row  rowID='4'  title='Horror' fetchURL={requests. requestsPopular}/>
    </>
  )
}

export default Home