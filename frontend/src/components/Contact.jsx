import React from 'react'
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brown-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-brown-50 mb-4 tracking-wider">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Social Media */}
          <div>
            <h3 className="text-xl font-serif text-brown-50 mb-6">
              SOCIAL MEDIA ICONS
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="w-12 h-12 bg-brown-900 border border-gold-500/30 rounded-full flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gold-500 group-hover:text-brown-950" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-brown-900 border border-gold-500/30 rounded-full flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gold-500 group-hover:text-brown-950" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-brown-900 border border-gold-500/30 rounded-full flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gold-500 group-hover:text-brown-950" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-brown-900 border border-gold-500/30 rounded-full flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-gold-500 group-hover:text-brown-950" />
              </a>
            </div>
          </div>

          {/* Right: Address */}
          <div>
            <h3 className="text-xl font-serif text-brown-50 mb-6">ADDRESS</h3>
            <div className="space-y-4 text-brown-50/90">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  KCK Banquets, Main Street, Downtown
                  <br />
                  City Name, State - 123456
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p className="text-sm sm:text-base">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <p className="text-sm sm:text-base">info@kckbanquets.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}