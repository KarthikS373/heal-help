import React from "react"

import Features from "../components/features/Features"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import NewsLetter from "../components/newsletter/NewsLetter"
import HomeTeam from "../components/Team/HomeTeam"
import HowWeWork from "../components/work/HowWeWork"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowWeWork />
      <NewsLetter />
      <HomeTeam />
      <Footer />
    </div>
  )
}

export default HomePage
