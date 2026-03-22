import React from 'react'

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600)',
        }}
      >
        {/* Dark Overlay with Brown Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/80 via-brown-900/70 to-brown-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-brown-50 leading-tight mb-8 text-shadow">
          Celebrate your special moment with the comforting flavours of our
          beloved recipes
        </h1>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}