import React, { useState } from 'react'

export const Services = () => {
  const [openService, setOpenService] = useState(null)

  const services = [
    {
      Image: '/assets/Bridal Showers.png',
      label: 'Weddings',
      options: [
        'Engagement',
        'Sangeet',
        'Haldi',
        'Mehendi',
        'Wedding',
        'Reception'
      ]
    },
    {
      Image: '/assets/Corporate Parties.png',
      label: 'Corporate Events',
      options: [
        'Office Parties',
        'Dealer Meets',
        "Annual General Meetings (AGM's)"
      ]
    },
    {
      Image: '/assets/Housewarming Parties.png',
      label: 'Private Parties',
      options: [
        'Housewarming',
        'Birthdays',
        'Baby Showers'
      ]
    }
  ]

  const handleServiceClick = (index) => {
    setOpenService(openService === index ? null : index)
  }

  return (
    <section id="services" className="py-20 bg-brown-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-brown-50 mb-16 tracking-wider">
          DESIGNED TO SUIT EVERY KIND OF GATHERING
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto">

          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >

              {/* Service */}
              <div
                onClick={() => handleServiceClick(index)}
                className="flex flex-col items-center group cursor-pointer"
              >

                {/* Circular Icon */}
                <div
                  className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gold-500 
                  flex items-center justify-center mb-4
                  transform transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-2xl
                  group-hover:shadow-gold-500/50
                  ${
                    openService === index
                      ? 'scale-110 shadow-2xl shadow-gold-500/50'
                      : ''
                  }`}
                >
                  <img
                    src={service.Image}
                    alt={service.label}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>

                {/* Label + Arrow */}
                <div className="flex items-center gap-2">
                  <p className="text-brown-50 text-sm sm:text-base font-light text-center tracking-wide">
                    {service.label}
                  </p>

                  {/* Dropdown Arrow */}
                  <span
                    className={`text-gold-500 text-lg transition-transform duration-300 ${
                      openService === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </div>

              </div>

              {/* Dropdown Options */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
                  openService === index
                    ? 'max-h-96 opacity-100 mt-5'
                    : 'max-h-0 opacity-0'
                }`}
              >

                <div className="flex flex-col items-center gap-2">

                  {service.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className="text-brown-50/90 text-sm sm:text-base font-light 
                      tracking-wide text-center
                      hover:text-gold-500 transition-colors duration-200"
                    >
                      {option}
                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}