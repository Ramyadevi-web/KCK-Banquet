import React from 'react'

export const About = () => {
  return (
    <section id="about" className="py-20 bg-brown-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800"
                alt="Chef"
                className="rounded-lg shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-brown-50 mb-6">
              About KCK Banquets
            </h2>
            <div className="space-y-4 text-brown-50/90 text-base sm:text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                eget tincidunt ante. Integer bibendum tempor rutrum. Cras maximus,
                orci sit amet egestas dapibus, ex lorem faucibus lorem, venenatis
                fringilla est lectetur ullamcorper ligula.
              </p>
              <p>
                Proin dapibus sagittis ultrices. Suspendisse potenti. Sed fermentum
                lorem turpis, vitae luctus lorem dictum dolor sit. Nam pretendent
                feugiat at justo venenatis porta. Donec ultrices ullamcorper
                lobortis.
              </p>
              <p>
                Maecenas dignissim ornare nisi in tempor. Pellentesque tempus felis
                nisl. Vivamus rutrum magna turpis, a commodo risus maximus vitae
                ultricies in erat. In scelerisque magna nec metus dignissim lacinia.
              </p>
            </div>
            <div className="mt-8">
              <button className="px-8 py-3 border-2 border-gold-500 text-gold-500 font-semibold tracking-wider hover:bg-gold-500 hover:text-brown-950 transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}