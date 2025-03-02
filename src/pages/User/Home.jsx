import React from 'react'
import Homebanner from '../../components/User/Homebanner' 
import { useEffect } from 'react'
import Whatwedo from '../../components/User/Whatwedo'
import Newsletter from '../../components/User/Newsletter'
import Footer from '../../components/User/Footer'
import DialysisCareSection from '../../components/User/Dialysiscaresection'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Homebanner />
      <Whatwedo />
      <DialysisCareSection />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
