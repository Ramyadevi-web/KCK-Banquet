import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-brown-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-brown-50/70 text-sm">
            © 2026 KCK Banquets. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-brown-50/70 hover:text-gold-500 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-brown-50/70 hover:text-gold-500 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}