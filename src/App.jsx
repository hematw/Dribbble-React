import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Footer from "./components/Footer"
import FooterCTA from "./components/FooterCTA.jsx"
import HeroFeed from "./components/HeroFeed.jsx"
import { marqueeData } from "./data.js"
import './App.css'



function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee data={marqueeData} />
        <HeroFeed />
        <Marquee data={marqueeData} />
        <FooterCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
