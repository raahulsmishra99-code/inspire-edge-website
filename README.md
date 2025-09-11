# Inspire Edge Ventures Website

A modern, professional website built with Next.js, featuring smooth animations, interactive elements, and a sophisticated design that reflects the company's innovative approach to connectivity solutions.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with the Inspire Edge Ventures brand identity
- **Smooth Animations**: Framer Motion-powered animations and transitions
- **Interactive Elements**: Cursor-following effects, hover animations, and responsive interactions
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **TypeScript**: Full type safety and better development experience

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful, customizable icons

## 🎨 Design Features

- **Custom Cursor**: Interactive cursor follower with multiple layers
- **Animated Logo**: Dynamic logo with hover effects and smooth transitions
- **Gradient Text**: Beautiful gradient text effects throughout the site
- **Glass Morphism**: Modern glass-like effects on navigation and cards
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Animations**: Rich interactive feedback on all interactive elements

## 📱 Sections

1. **Hero Section** - Company introduction with animated logo and tagline
2. **Services Section** - Interactive service cards with hover effects
3. **About Section** - Company information with animated statistics
4. **Contact Section** - Contact form with animated elements

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd inspire-edge-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and Tailwind imports
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main page component
├── components/          # Reusable components
│   ├── CursorFollower.tsx    # Custom cursor component
│   ├── Navigation.tsx        # Navigation bar
│   ├── HeroSection.tsx       # Hero section
│   ├── ServicesSection.tsx   # Services section
│   ├── AboutSection.tsx      # About section
│   └── ContactSection.tsx    # Contact section
└── lib/                # Utility functions and configurations
```

## 🎯 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors (blues)
- Accent colors (oranges)
- Dark colors (grays)

### Animations
Animation configurations are available in `tailwind.config.js` and can be customized using Framer Motion variants in individual components.

### Content
Update the content in each component file to match your business needs.

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm start
# or
yarn start
```

### Deploy to Vercel
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first approach
- Responsive grid layouts
- Adaptive typography
- Touch-friendly interactions
- Optimized mobile navigation

## 🔧 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **Lazy Loading**: Components load as they come into view
- **Optimized Animations**: Hardware-accelerated animations
- **Minimal Bundle Size**: Optimized dependencies and tree shaking

## 🎨 Animation System

The website uses a sophisticated animation system:
- **Staggered Animations**: Elements animate in sequence for visual appeal
- **Scroll-Triggered Animations**: Content animates as it comes into view
- **Hover Interactions**: Rich feedback on user interactions
- **Smooth Transitions**: Consistent timing and easing functions
- **Performance Optimized**: Uses `transform` and `opacity` for smooth animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ using Next.js and modern web technologies.
