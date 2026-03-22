import React from 'react'

export const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1519167758481-83f29da8c19f?q=80&w=600',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600',
    'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600',
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=600',
    'https://images.unsplash.com/photo-1519167758481-83f29da8c19f?q=80&w=600',
    'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600',
  ]

  return (
    <section id="gallery" className="py-20 bg-brown-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-brown-50 mb-4 tracking-wider">
            GALLERY
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-0 md:gap-0 mx-5">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex justify-center relative overflow-hidden shadow-xl group cursor-pointer aspect-square"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div> */}
        {/* Gallery Wrapper (Border + Spacing) */}
<div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 p-2">
  
  {/* Gallery Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-3 border-4 border-black-50 gap-2">
    {images.map((img, index) => (
      <div
        key={index}
        className="relative overflow-hidden shadow-md group cursor-pointer aspect-square"
      >
        <img
          src={img}
          alt={`Gallery ${index + 1}`}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/20 transition-colors duration-300"></div>
      </div>
    ))}
  </div>

</div>

      </div>
    </section>
  )
}