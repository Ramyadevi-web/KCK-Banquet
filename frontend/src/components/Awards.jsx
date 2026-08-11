import React from 'react'
import { Award } from 'lucide-react'
import '/src/Awards.css'

export const Awards = () => {
  const awardsGallery = [
    { id: 1, img: '/assets/Award1.jpeg' },
    { id: 2, img: '/assets/Award2.jpeg' },
    { id: 3, img: '/assets/Award3.jpeg' },
    { id: 4, img: '/assets/Award4.jpeg' },
    { id: 5, img: '/assets/Award5.jpeg' }
  ]

  
  const awards = [
  {
    image: "/assets/Conde Nast Traveller.png",
    title: "Nast Traveller"
  },
  {
    image: "/assets/Epicurean Guild Award.png",
    title: "Epicurean Guild Award"
  },
  {
    image: "/assets/Hospitality Award.png",
    title: "Hospitality Horizon Top Chefs Award 2024"
  },
  {
    image: "/assets/NDTV Award.png",
    title: "NDTV Award"
  },
  {
    image: "/assets/Restaurant Award.png",
    title: "Restaurant Award"
  },
  {
    image: "/assets/Times Food & Nightlife.png",
    title: "Times Food & Nightlife"
  }
];

  return (
    <section id="awards" className="py-20 bg-brown-8+00">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-brown-50 mb-4">
            Awards & Accolades
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 md:gap-0">
          {awardsGallery.map((award, index) => (
            <div
              key={award.id}
              className="relative group overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Award Image */}
              <div className="aspect-square">
                <img
                  src={award.img}
                  alt={`Award ${award.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Laurel Overlay */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Award className="w-8 h-8 text-gold-500" />
              </div>

              {/* Award Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-brown-950 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brown-50 text-sm font-light text-center">
                  Excellence Award {award.id}
                </p>
              </div>
            </div>
          ))}
        </div>

         {/* Award Section */}
      <div className="awards-grid">

        {awards.map((award, index) => (
          <div className="award-card" key={index}>

            {/* Award PNG Image */}
            <div className="award-image-wrapper">
              <img
                src={award.image}
                alt={award.title}
                className="award-image"
              />
            </div>

            {/* Award Title */}
            <h3 className="award-title">
              {award.title}
            </h3>

            {/* Award Subtitle */}
            {/* <p className="award-subtitle">
              {award.subtitle}
            </p> */}

          </div>
        ))}

      </div>

      </div>
    </section>
  )
}