import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/send-enquiry', async (req, res) => {
  const { name, phone, event_types } = req.body

  try {
   const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
})

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // you receive mail
      subject: 'New Enquiry from KCK Banquets',
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Event Types:</b> ${event_types.join(', ')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    res.json({ message: 'Enquiry sent successfully!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ detail: 'Failed to send email' })
  }
})

app.listen(5000, () => console.log('Server running on port 5000'))