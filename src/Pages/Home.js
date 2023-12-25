import React from 'react'
import Featured from '../Featured'
import Rightpage from '../Rightpage'
import Sports from '../Sports'
import Topbanner from '../Topbanner'
import Trending from '../Trending'
import WorldNews from '../WorldNews'

function Home() {
  return (
    <>
    
      <Trending/>
      <WorldNews/>
      <Featured/>
      <Sports/>
    </>
  )
}

export default Home
