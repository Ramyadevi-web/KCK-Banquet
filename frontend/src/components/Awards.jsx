import React from 'react'
import { Award } from 'lucide-react'

export const Awards = () => {
  const awards = [
    { id: 1, img: 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=400' },
    { id: 2, img: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=400' },
    { id: 3, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400' },
    { id: 4, img: 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=400' },
    { id: 5, img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400' },
    { id: 6, img: 'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?q=80&w=400' },
  ]

  return (
    <section id="awards" className="py-20 bg-brown-900">
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
          {awards.map((award, index) => (
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
      </div>
    </section>
  )
}