export const Services = () => {
  const services = [
    { Image: 'src/assets/Bridal Showers.png', label: 'Weddings' },
    { Image: 'src/assets/Birthdays.png', label: 'Birthdays' },
    { Image: 'src/assets/Anniversaries.png', label: 'Anniversaries' },
    { Image: 'src/assets/Parties.png', label: 'Parties' },
    { Image: 'src/assets/Corporate Parties.png', label: 'Corporate Events' },
    { Image: 'src/assets/Family Gatherings.png', label: 'Social Gatherings' },
  ]

  return (
    <section id="services" className="py-20 bg-brown-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-brown-50 mb-16 tracking-wider">
          DESIGNED TO SUIT EVERY KIND OF GATHERING
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Circular Icon */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gold-500 flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-gold-500/50">
                  <img src={service.Image} alt={service.label} className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
                {/* Label */}
                <p className="text-brown-50 text-sm sm:text-base font-light text-center tracking-wide">
                  {service.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}