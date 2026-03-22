"# KCK Banquets - Quick Setup Guide

## 📋 Complete Project Structure

```
kck-banquets/
├── public/                    # Static assets
│   └── vite.svg
│
├── src/
│   ├── components/           # All React components
│   │   ├── Navbar.jsx       # Sticky navigation with smooth scroll
│   │   ├── Hero.jsx         # Full-screen hero section
│   │   ├── Services.jsx     # Services with circular icons
│   │   ├── EnquiryForm.jsx  # Contact form with validation
│   │   ├── About.jsx        # About section
│   │   ├── Awards.jsx       # Awards gallery grid
│   │   ├── Testimonials.jsx # Video testimonials
│   │   ├── Gallery.jsx      # Photo gallery
│   │   ├── Contact.jsx      # Contact info & social media
│   │   └── Footer.jsx       # Footer section
│   │
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
│
├── .env.example             # Environment variables template
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind customization
├── vite.config.js          # Vite configuration
└── README.md               # Documentation
```

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
cd kck-banquets
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:3000**

## 🎨 Customization Checklist

### ✅ Update Your Logo
**File:** `src/components/Navbar.jsx`

Replace:
```jsx
<div className=\"border-2 border-gold-500 p-2 rounded\">
  <span className=\"text-2xl sm:text-3xl font-bold text-gold-500 font-serif\">
    KCK
  </span>
</div>
```

With:
```jsx
<img 
  src=\"https://customer-assets.emergentagent.com/job_kck-banquets/artifacts/5gioumb3_KCK%20%20banquets%20logo%20final.png\" 
  alt=\"KCK Banquets\" 
  className=\"h-12 w-auto\"
/>
```

### ✅ Update Images

**Hero Background** (`src/components/Hero.jsx`):
```jsx
backgroundImage: 'url(YOUR_BANQUET_HALL_IMAGE.jpg)'
```

**About Section** (`src/components/About.jsx`):
```jsx
<img src=\"YOUR_CHEF_OR_VENUE_IMAGE.jpg\" alt=\"Chef\" />
```

**Gallery** (`src/components/Gallery.jsx`):
```jsx
const images = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  // ... your actual images
]
```

**Awards** (`src/components/Awards.jsx`):
```jsx
const awards = [
  { id: 1, img: '/images/award-1.jpg' },
  // ... your actual award images
]
```

### ✅ Update Content

**About Section** (`src/components/About.jsx`):
- Replace Lorem ipsum text with your actual story
- Update the \"LEARN MORE\" button link

**Contact Information** (`src/components/Contact.jsx`):
- Update address, phone, email
- Add your social media URLs:
  ```jsx
  <a href=\"https://facebook.com/yourpage\">...</a>
  ```

### ✅ Configure Backend API

**Create `.env` file:**
```bash
cp .env.example .env
```

**Update API URL:**
```
VITE_API_URL=https://your-backend-domain.com/api
```

**Form submission endpoint** should accept:
```json
POST /api/send-enquiry
{
  \"name\": \"John Doe\",
  \"phone\": \"+91 9876543210\",
  \"event_types\": [\"Wedding Receptions\", \"Corporate Events\"]
}
```

## 🎨 Color Customization

Edit `tailwind.config.js`:

```js
colors: {
  brown: {
    50: '#F5E6D3',   // Light cream
    800: '#4A3426',  // Medium brown
    900: '#3D2817',  // Dark brown
    950: '#2D1F13',  // Darkest brown
  },
  gold: {
    500: '#DAA520',  // Primary gold
  },
}
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Build for Production

```bash
# Build the project
npm run build

# Output folder: dist/
# Deploy the 'dist' folder to your hosting provider
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Build: `npm run build`
2. Upload `dist/` folder to Netlify
3. Or connect GitHub repo for auto-deploy

### Option 3: Traditional Hosting
1. Build: `npm run build`
2. Upload `dist/` folder to your web server
3. Point domain to the uploaded folder

## 🐛 Troubleshooting

### Issue: Images not loading
- Ensure images are in `public/` folder or use absolute URLs
- Check image paths are correct

### Issue: Form not submitting
- Verify API endpoint URL in `.env`
- Check backend is running and accessible
- Check browser console for errors

### Issue: Styles not applying
- Clear browser cache
- Restart development server
- Verify Tailwind is configured correctly

## 📱 Testing Responsive Design

```bash
# Mobile (375px width)
# Tablet (768px width)
# Desktop (1920px width)
```

Use browser DevTools (F12) → Toggle device toolbar

## 🎯 Features Checklist

- ✅ Sticky navigation with smooth scroll
- ✅ Full-screen hero section
- ✅ Services section with 6 icons
- ✅ Working enquiry form
- ✅ About section with image
- ✅ Awards grid with hover effects
- ✅ Testimonial videos placeholders
- ✅ Photo gallery with zoom effect
- ✅ Contact section with social media
- ✅ Fully responsive design
- ✅ Brown/Gold luxury theme
- ✅ Elegant typography (Playfair Display + Inter)

## 📞 Need Help?

- Check `README.md` for detailed documentation
- Review component files for inline comments
- Contact: info@kckbanquets.com

---

**Your KCK Banquets website is ready! 🎉**

Start with `npm run dev` and customize to match your brand.
"