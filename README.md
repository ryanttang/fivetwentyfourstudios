# FiveTwentyFour Studios - B2B Marketing Agency Website

A modern, responsive website for FiveTwentyFour Studios, a B2B marketing agency. Built with Next.js, Headless UI, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design inspired by Dapper Agency
- **Responsive Layout**: Mobile-first responsive design
- **Smooth Animations**: Framer Motion animations throughout the site
- **Accessible**: Built with Headless UI for excellent accessibility
- **Performance**: Optimized with Next.js for fast loading
- **SEO Ready**: Proper meta tags and structured content

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Headless UI**: Accessible UI components
- **Framer Motion**: Animation library
- **Heroicons**: Icon library

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── careers/           # Careers page
│   ├── cases/             # Case studies page
│   ├── contact/           # Contact page
│   ├── expertise/         # Expertise areas page
│   ├── resources/         # Blog and newsletter page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   └── Layout.tsx     # Main layout wrapper
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Homepage hero section
│   │   ├── Services.tsx   # Services showcase
│   │   └── Results.tsx    # Client results
│   └── ui/                # UI components
│       └── ContactForm.tsx # Contact form
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fivetwentyfour-studios
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The primary color scheme is defined in `tailwind.config.ts`. You can customize:
- Primary colors (blue theme)
- Gray scale
- Custom animations

### Content
- Update company information in components
- Modify service offerings in `src/app/services/page.tsx`
- Add case studies in `src/app/cases/page.tsx`
- Update contact information in `src/app/contact/page.tsx`

### Animations
Framer Motion animations are used throughout. You can customize:
- Animation durations and delays
- Transition effects
- Scroll-triggered animations

## Deployment

The site is ready for deployment on Vercel, Netlify, or any other Next.js-compatible platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to FiveTwentyFour Studios.

## Contact

For questions or support, contact hello@fivetwentyfourstudios.com
