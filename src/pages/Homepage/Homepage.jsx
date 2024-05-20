import React from 'react'
import Header from '../../components/Header/Header'
import AktualityTop from '../../components/AktualityTop/AktualityTop'
import Prispevky from '../../components/Prispevky/Prispevky'
import Banner from '../../components/Banner/Banner'
import Statistiky from '../../components/Statistiky/Statistiky'
import Fotogalerie from '../../components/Fotogalerie/Fotogalerie'
import Tymy from '../../components/Tymy/Tymy'
import Info from '../../components/Info/Info'
import Kontakty from '../../components/Kontakty/Kontakty'
import Footer from '../../components/Footer/Footer'
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";

const Homepage = () => {
  return (
    <>
      <AktualityTop />
      <Prispevky />
      <Banner />
      <Statistiky />    
      <Fotogalerie />
      <Tymy />
      <Info />
      <Kontakty />
      <Footer />

    </>
  )
}

export default Homepage