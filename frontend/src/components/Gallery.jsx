import React from 'react'

export const Gallery = () => {
  const images = [
    "/assets/banquets 1.jpeg",
    "/assets/banquets 2.jpeg",
    "/assets/banquets 3.jpeg",
    "/assets/banquet Post4.jpeg",
    "/assets/banquets post 5.jpeg",
    "/assets/banquets post 6.jpeg",
    "/assets/banquets 7.jpeg"
  ]


  return (
    <section id="gallery" className="py-20 bg-brown-800">

      {/* Gallery Section */}
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