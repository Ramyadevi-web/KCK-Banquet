import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { EnquiryForm } from './components/EnquiryForm'
import { About } from './components/About'
import { Awards } from './components/Awards'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brown-950">
      <Navbar />
      <Hero />
      <Services />
      <EnquiryForm />
      <About />
      <Awards />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App