# KCK Banquets - React Vite Website

Elegant restaurant/banquet website built with React, Vite, and Tailwind CSS.

## 📁 Project Structure

```
kck-banquets/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── EnquiryForm.jsx
│   │   ├── About.jsx
│   │   ├── Awards.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Features

- ✨ **Sticky Navigation** - Smooth scroll to sections
- 🎨 **Elegant Design** - Brown/Golden luxury theme
- 📱 **Fully Responsive** - Mobile, Tablet, Desktop
- 💌 **Working Contact Form** - Email integration ready
- 🖼️ **Image Galleries** - Awards, Testimonials, Gallery sections
- ⚡ **Fast Performance** - Built with Vite
- 🎭 **Smooth Animations** - Hover effects and transitions

## 🛠️ Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Steps

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open browser**
   - Navigate to `http://localhost:3000`

## 🔧 Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` folder.

## 🎨 Customization

### Update Logo
Replace the logo placeholder in `src/components/Navbar.jsx`:
```jsx
// Change from:
<span className="text-2xl font-bold text-gold-500 font-serif">KCK</span>

// To:
<img src="/path/to/your-logo.png" alt="KCK Banquets" className="h-10" />
```

### Update Images
- Replace placeholder images in components with your actual images
- Update `src/components/Hero.jsx` for hero background
- Update `src/components/Gallery.jsx` for gallery images
- Update `src/components/Awards.jsx` for award images

### Update Colors
Modify colors in `tailwind.config.js`:
```js
colors: {
  brown: { /* your brown shades */ },
  gold: { /* your gold shades */ },
}
```

### Configure API Endpoint
Update the API URL in `src/components/EnquiryForm.jsx`:
```js
const API_URL = import.meta.env.VITE_API_URL || 'your-api-url'
```

Create a `.env` file:
```
VITE_API_URL=https://your-backend-api.com/api
```

## 📝 Content Updates

### About Section
Edit content in `src/components/About.jsx`

### Services
Modify services array in `src/components/Services.jsx`

### Contact Information
Update details in `src/components/Contact.jsx`

## 🎯 Form Integration

The enquiry form in `EnquiryForm.jsx` is ready for backend integration.

**Backend Requirements:**
- POST endpoint: `/api/send-enquiry`
- Expected payload:
  ```json
  {
    "name": "string",
    "phone": "string",
    "event_types": ["string"]
  }
  ```

## 📦 Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **axios** - HTTP client
- **lucide-react** - Icon library
- **tailwindcss** - Utility-first CSS
- **vite** - Build tool

## 🎨 Design System

### Colors
- **Primary Brown**: `#3D2817`, `#4A3426`, `#2D1F13`
- **Primary Gold**: `#DAA520`
- **Accent**: `#F5E6D3`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `≥ 1024px`

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
1. Update `vite.config.js`:
   ```js
   base: '/your-repo-name/'
   ```
2. Build and deploy:
   ```bash
   npm run build
   ```

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Support

For issues or questions, please contact: info@kckbanquets.com

---

**Built with ❤️ using React + Vite + Tailwind CSS**