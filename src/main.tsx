import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import FeatureSection from './components/FeatureSection.tsx'
import PricingSection from './components/PricingSection.tsx'
import DownloadSection from './components/DownloadSection.tsx'
import Footer from "./components/Footer.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero/>
    <About/>
    <FeatureSection/>
    <PricingSection/>
    <DownloadSection/>
    <Footer/>
    </StrictMode>,
)
