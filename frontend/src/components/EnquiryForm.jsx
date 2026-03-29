import React, { useState } from 'react'
import axios from 'axios'

export const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    number_of_guests: '',
    event_location: '',
    wedding: '',
    eventTypes: [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const eventOptions = [
    'Office Parties',
    'House Warming',
    'Birthday',
    'Home Parties',
    'Kitty Party',
    'Destination Weddings',
    'Corporate Programmes',
    'Business Seminars'
  ]

  const handleCheckboxChange = (event) => {
    const checked = formData.eventTypes.includes(event)
    if (checked) {
      setFormData({
        ...formData,
        eventTypes: formData.eventTypes.filter((e) => e !== event),
      })
    } else {
      setFormData({
        ...formData,
        eventTypes: [...formData.eventTypes, event],
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (!formData.name || !formData.phone || !formData.number_of_guests || !formData.event_location) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' })
      return
    }

    if (formData.eventTypes.length === 0 && !formData.wedding) {
      setMessage({ type: 'error', text: 'Please select atleast one event' })
      return
    }

    setIsSubmitting(true)

    try {
      // API endpoint
      // const API_URL = 'https://kck-banquet.onrender.com'
      const API_URL = 'http://localhost:5000'
      
      const response = await axios.post(`${API_URL}/send-enquiry`, {
        name: formData.name,
        phone: formData.phone,
        number_of_guests: formData.number_of_guests,
        event_location: formData.event_location,
        wedding: formData.wedding,
        event_types: formData.eventTypes,
      })

      setMessage({ type: 'success', text: response.data.message })
      setFormData({ name: '', phone: '', number_of_guests: '', event_location: '', eventTypes: [] })
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.detail || 'Failed to submit enquiry. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="enquiry" className="py-20 bg-brown-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brown-950 p-8 sm:p-12 rounded-lg border border-gold-500/30">
          <h2 className="text-2xl sm:text-3xl font-serif text-brown-50 mb-8 text-center">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-brown-50 mb-2 text-sm">
                Name <span className="text-gold-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-brown-50 mb-2 text-sm">
                Phone Number <span className="text-gold-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="phone" className="block text-brown-50 mb-2 text-sm">
                Number of Guests (pax) <span className="text-gold-500">*</span>
              </label>
              <input
                id="number_of_guests"
                type="number"
                value={formData.number_of_guests}
                onChange={(e) => setFormData({ ...formData, number_of_guests: e.target.value })}
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Enter approxi. number of guests"
                required
              />
            </div>

            {/* Event Location */}
            <div>
              <label htmlFor="phone" className="block text-brown-50 mb-2 text-sm">
                Event Location <span className="text-gold-500">*</span>
              </label>
              <input
                id="event_location"
                type="text"
                value={formData.event_location}
                onChange={(e) => setFormData({ ...formData, event_location: e.target.value })}
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Enter event locaiton"
                required
              />
            </div>

                {/* Wedding Events Dropdown */}
            <div>
              <label className="block text-brown-50 mb-2 text-sm">
                Wedding Events <span className="text-gold-500">*</span>
              </label>

              <select
                value={formData.wedding}
                onChange={(e) => setFormData({ ...formData, wedding: e.target.value })}
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50"
              >
                <option value="">Select wedding event</option>
                <option value="Engagement">Engagement</option>
                <option value="Sangeet">Sangeet</option>
                <option value="Haldi">Haldi</option>
                <option value="Wedding">Wedding</option>
                <option value="Reception">Reception</option>
              </select>
            </div>

            {/* Event Types */}
            <div>
              <p className="text-brown-50 mb-4 text-sm">
                Select Event Type(s) <span className="text-gold-500">*</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventOptions.map((event) => (
                  <div key={event} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={event}
                      checked={formData.eventTypes.includes(event)}
                      onChange={() => handleCheckboxChange(event)}
                      className="w-4 h-4 border-gold-500 text-gold-500 focus:ring-gold-500"
                    />
                    <label
                      htmlFor={event}
                      className="text-brown-50 text-sm cursor-pointer hover:text-gold-500 transition-colors"
                    >
                      {event}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-transparent border-2 border-gold-500 text-gold-500 font-semibold tracking-widest hover:bg-gold-500 hover:text-brown-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND'}
            </button>

            {/* Message */}
            {message.text && (
              <div
                className={`p-4 rounded text-center ${
                  message.type === 'success'
                    ? 'bg-green-900/30 text-green-300 border border-green-500/50'
                    : 'bg-red-900/30 text-red-300 border border-red-500/50'
                }`}
              >
                {message.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}