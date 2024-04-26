import Nav from "./components/Nav"
import Hero from "./components/Hero"
import HeroFeed from "./components/HeroFeed.jsx"
import Marquee from "./components/Marquee"
import Footer from "./components/Footer"
import FooterCTA from "./components/FooterCTA.jsx"
import { marqueeData, footerMarqueeData } from "./data.js"
import './App.css'



function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee data={ marqueeData } />
        <HeroFeed />
        <FooterCTA />
        <Marquee data={ footerMarqueeData } isBottom={true} />
      </main>
      <Footer />
    </>
  )
}

export default App
