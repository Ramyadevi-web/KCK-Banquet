import React, { useState } from 'react'

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      Image: '/assets/Bridal Showers.png',
      label: 'Weddings',
      description:
        'The most memorable weddings are defined by moments shared around exceptional food. Whether you envision a traditional Kerala Sadhya or a bespoke menu crafted for your celebration, our team ensures every guest is treated to warm hospitality, refined flavours, and an experience they will remember long after the festivities.'
    },
    {
      Image: '/assets/Birthdays.png',
      label: 'Birthdays',
      description:
        'Planning a birthday should be as enjoyable as celebrating one. With thoughtfully curated menus, attentive service, and every detail taken care of, we help you host a celebration that\'s effortless for you and unforgettable for your guests. '
    },
    {
      Image: '/assets/Bridal Showers.png',
      label: 'Anniversaries',
      description:
        'Every anniversary is a celebration of cherished memories and new milestones. From intimate dinners to joyful gatherings with family and friends, we craft personalised dining experiences with exceptional cuisine and heartfelt hospitality, making every moment truly unforgettable.'
    },
    // {
    //   Image: '/assets/Housewarming Parties.png',
    //   label: 'Parties',
    //   description:
    //     ''
    // },
    {
      Image: '/assets/Corporate Parties.png',
      label: 'Corporate Events',
      description:
        'Successful corporate events are built on meaningful conversations, seamless execution, and exceptional dining. From leadership lunches and client meetings to conferences and large-scale celebrations, we deliver thoughtfully curated menus, impeccable service, and warm hospitality that reflect your organisation\'s standards.'
    },
    {
      Image: '/assets/Conferences.png',
      label: 'Social Gatherings',
      description:
        'Whether it\'s a family reunion, festive celebration, or community event, we bring people together with thoughtfully curated menus, warm hospitality, and an experience that\'s remembered long after the occasion.'
    }
  ]

  return (
    <>
      <section id="services" className="py-20 bg-brown-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-brown-50 mb-16 tracking-wider">
            DESIGNED TO SUIT EVERY KIND OF GATHERING
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">

            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="flex flex-col items-center group cursor-pointer"
              >

                {/* Circular Icon */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gold-500 flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-gold-500/50">

                  <img
                    src={service.Image}
                    alt={service.label}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />

                </div>

                {/* Label */}
                <p className="text-brown-50 text-sm sm:text-base font-light text-center tracking-wide">
                  {service.label}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= POPUP ================= */}

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setSelectedService(null)}
        >

          {/* Popup Box */}
          <div
            className="relative w-full max-w-lg bg-brown-800 rounded-xl p-8 sm:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-4 text-brown-50 text-3xl font-light hover:text-gold-500 transition-colors duration-200"
              aria-label="Close popup"
            >
              &times;
            </button>


            {/* Popup Image */}
            <div className="flex justify-center mb-5">
              <div className="w-24 h-24 rounded-full bg-gold-500 flex items-center justify-center">

                <img
                  src={selectedService.Image}
                  alt={selectedService.label}
                  className="w-16 h-16"
                />

              </div>
            </div>


            {/* Popup Title */}
            <h3 className="text-2xl sm:text-3xl font-serif text-brown-50 text-center mb-4">
              {selectedService.label}
            </h3>


            {/* Description */}
            <p className="text-brown-50/80 text-sm sm:text-base text-center leading-7 font-light">
              {selectedService.description}
            </p>

          </div>

        </div>
      )}
    </>
  )
}