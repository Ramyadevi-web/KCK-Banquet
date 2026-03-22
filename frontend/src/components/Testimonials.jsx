import React from 'react'
import { Play } from 'lucide-react'

export const Testimonials = () => {
  const videos = [
    {
      id: 1,
      title: 'Our Best Experience',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600',
    },
    {
      id: 2,
      title: 'Amazing Service',
      thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600',
    },
    {
      id: 3,
      title: 'Wonderful Memories',
      thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600',
    },
    {
      id: 4,
      title: 'Strength In Numbers',
      thumbnail: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600',
    },
    {
      id: 5,
      title: "Here's The Proof",
      thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-brown-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-brown-50 mb-16 tracking-wider">
          TESTIMONIALS
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              {/* Video Thumbnail */}
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brown-900/40 group-hover:bg-brown-900/60 transition-colors duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brown-950 to-transparent">
                  <p className="text-brown-50 text-sm font-light text-center">
                    {video.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}