import React, { useState } from 'react'
import axios from 'axios'

export const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    number_of_guests: '',
    event_location: '',
    service: '',
    event: '',
    serviceOpen: false,
    eventOpen: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  // ==============================
  // SERVICES AND EVENTS
  // ==============================

  const services = {
    Weddings: [
      'Engagement',
      'Sangeet',
      'Haldi',
      'Mehendi',
      'Wedding',
      'Reception'
    ],

    'Corporate Events': [
      'Office Parties',
      'Dealer Meets',
      "Annual General Meetings (AGM's)"
    ],

    'Private Parties': [
      'Housewarming',
      'Birthdays',
      'Baby Showers',
      'Anniversaries',
      'Celebration Parties'
    ]
  }

  // ==============================
  // SUBMIT FORM
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault()

    setMessage({ type: '', text: '' })

    // Required fields validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.number_of_guests ||
      !formData.event_location
    ) {
      setMessage({
        type: 'error',
        text: 'Please fill in all required fields'
      })

      return
    }

    // Service validation
    if (!formData.service || !formData.event) {
      setMessage({
        type: 'error',
        text: 'Please select an event'
      })

      return
    }

    setIsSubmitting(true)

    try {
      // API endpoint
      // const API_URL = 'https://kck-banquet.onrender.com'
      const API_URL = 'http://localhost:5000'

      const response = await axios.post(
        `${API_URL}/send-enquiry`,
        {
          name: formData.name,
          phone: formData.phone,
          number_of_guests: formData.number_of_guests,
          event_location: formData.event_location,

          // Selected service
          service: formData.service,

          // Selected event
          event: formData.event
        }
      )

      setMessage({
        type: 'success',
        text: response.data.message
      })

      // Reset form
      setFormData({
        name: '',
        phone: '',
        number_of_guests: '',
        event_location: '',
        service: '',
        event: '',
        serviceOpen: false,
        eventOpen: false
      })

    } catch (error) {
      setMessage({
        type: 'error',
        text:
          error.response?.data?.detail ||
          'Failed to submit enquiry. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="enquiry" className="py-20 bg-brown-900">

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-brown-950 p-8 sm:p-12 rounded-lg border border-gold-500/30">

          {/* ==============================
              TITLE
          ============================== */}

          <h2 className="text-2xl sm:text-3xl font-serif text-brown-50 mb-8 text-center">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* ==============================
                NAME
            ============================== */}

            <div>
              <label
                htmlFor="name"
                className="block text-brown-50 mb-2 text-sm"
              >
                Name <span className="text-gold-500">*</span>
              </label>

              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                }
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Enter your name"
                required
              />
            </div>


            {/* ==============================
                PHONE
            ============================== */}

            <div>
              <label
                htmlFor="phone"
                className="block text-brown-50 mb-2 text-sm"
              >
                Phone Number <span className="text-gold-500">*</span>
              </label>

              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value
                  })
                }
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Enter your phone number"
                required
              />
            </div>


            {/* ==============================
                NUMBER OF GUESTS
            ============================== */}

            <div>
              <label
                htmlFor="number_of_guests"
                className="block text-brown-50 mb-2 text-sm"
              >
                Number of Guests (pax)
                <span className="text-gold-500"> *</span>
              </label>

              <input
                id="number_of_guests"
                type="number"
                value={formData.number_of_guests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    number_of_guests: e.target.value
                  })
                }
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Enter approximate number of guests"
                required
              />
            </div>


            {/* ==============================
                EVENT LOCATION
            ============================== */}

            <div>
              <label
                htmlFor="event_location"
                className="block text-brown-50 mb-2 text-sm"
              >
                Event Location
                <span className="text-gold-500"> *</span>
              </label>

              <input
                id="event_location"
                type="text"
                value={formData.event_location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    event_location: e.target.value
                  })
                }
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Enter event location"
                required
              />
            </div>


            {/* ==============================
                SERVICE DROPDOWN
            ============================== */}

            <div className="relative">

              <label className="block text-brown-50 mb-2 text-sm">
                Select Service
                <span className="text-gold-500"> *</span>
              </label>

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    serviceOpen: !formData.serviceOpen,
                    eventOpen: false
                  })
                }
                className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 text-left flex justify-between items-center"
              >

                <span>
                  {formData.service || 'Select a service'}
                </span>

                <span
                  className={`transition-transform duration-200 ${
                    formData.serviceOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>

              </button>


              {/* Service Options */}

              {formData.serviceOpen && (

                <div className="absolute w-full mt-2 bg-brown-800 border border-gold-500/30 rounded shadow-lg z-20 overflow-hidden">

                  {Object.keys(services).map((service) => (

                    <div
                      key={service}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          service: service,
                          event: '',
                          serviceOpen: false,
                          eventOpen: false
                        })
                      }
                      className="px-4 py-3 text-brown-50 hover:bg-brown-950 hover:text-gold-500 cursor-pointer transition-colors"
                    >
                      {service}
                    </div>

                  ))}

                </div>

              )}

            </div>


            {/* ==============================
                EVENT DROPDOWN
            ============================== */}

            {formData.service && (

              <div className="relative">

                <label className="block text-brown-50 mb-2 text-sm">
                  Select Event
                  <span className="text-gold-500"> *</span>
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      eventOpen: !formData.eventOpen,
                      serviceOpen: false
                    })
                  }
                  className="w-full px-4 py-3 bg-brown-800 border border-gold-500/30 rounded text-brown-50 text-left flex justify-between items-center"
                >

                  <span>
                    {formData.event || 'Select an event'}
                  </span>

                  <span
                    className={`transition-transform duration-200 ${
                      formData.eventOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>

                </button>


                {/* Event Options */}

                {formData.eventOpen && (

                  <div className="absolute w-full mt-2 bg-brown-800 border border-gold-500/30 rounded shadow-lg z-20 overflow-hidden">

                    {services[formData.service].map((event) => (

                      <div
                        key={event}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            event: event,
                            eventOpen: false
                          })
                        }
                        className="px-4 py-3 text-brown-50 hover:bg-brown-950 hover:text-gold-500 cursor-pointer transition-colors"
                      >
                        {event}
                      </div>

                    ))}

                  </div>

                )}

              </div>

            )}


            {/* ==============================
                SUBMIT BUTTON
            ============================== */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-transparent border-2 border-gold-500 text-gold-500 font-semibold tracking-widest hover:bg-gold-500 hover:text-brown-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND'}
            </button>


            {/* ==============================
                MESSAGE
            ============================== */}

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