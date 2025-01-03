import React from 'react'
import Homebanner from '../components/Homebanner'
import Servicecontainer from '../components/Servicecontainer'
import Whatwedo from '../components/Whatwedo'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Homebanner />
      <Servicecontainer />
      <Whatwedo />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
