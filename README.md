# HIVE One-Pager Website

Elegant, modern one-page website for HIVE - Ekskluzivno Mednarodno Poslovno Združenje

## 🚀 Recent Updates

### Design Improvements
- ✅ **Enlarged Hero Logo**: Main logo is now 200px (desktop) and scales appropriately on mobile
- ✅ **Removed "HIVE" Text**: Cleaner hero section with only the logo and subtitle
- ✅ **Transparent Logo**: Updated to use `HD_3000X1688_1x-removebg-preview.png` throughout
- ✅ **Single Row Founders**: All 4 founders now display in one row on desktop (2x2 on tablets, 1 column on mobile)
- ✅ **Updated Founder Photos**: New professional founder images

### SEO Optimization
- ✅ **Meta Tags**: Comprehensive meta description, keywords, and Open Graph tags
- ✅ **Structured Data**: JSON-LD schema for Organization with founder information
- ✅ **Alt Text**: Descriptive alt attributes on all images
- ✅ **Lazy Loading**: Images use `loading="lazy"` for better performance
- ✅ **Semantic HTML**: Proper heading hierarchy and ARIA labels
- ✅ **Canonical URL**: Set to prevent duplicate content issues
- ✅ **Favicon**: HIVE logo as browser icon

### Mobile Responsiveness
- ✅ **Breakpoints**:
  - Desktop (1440px+): Full 4-column founder grid
  - Tablet (768px-1024px): 2-column founder grid
  - Mobile (480px-768px): 2-column founder grid, stacked navigation
  - Small Mobile (<480px): 1-column layout
  - Tiny Screens (<360px): Optimized for very small devices

- ✅ **Touch-Friendly**: Larger buttons and tap targets on mobile
- ✅ **Flexible Typography**: Font sizes scale appropriately across devices
- ✅ **Optimized Images**: Logo and images scale based on viewport width

## 📁 File Structure

```
HIVE one-pager/
├── index.html                               # Main HTML file
├── styles.css                               # Complete styling
├── script.js                                # Interactive animations
├── HD_3000X1688_1x-removebg-preview.png    # Transparent HIVE logo
├── HD_3000X1688@1x.jpg                     # Community image
├── bosko_prastalo_new.jpg                  # Founder 1
├── mark_kalin_new.jpg                      # Founder 2
├── marko_hozjan_new.jpg                    # Founder 3
├── rok_kragelj_new.jpg                     # Founder 4
├── README.md                               # This file
└── FOUNDER_IMAGES_INSTRUCTIONS.md          # Image setup guide
```

## 🎨 Features

### Sections
1. **Hero Section** - Large logo, tagline, description, CTA
2. **O HIVE-u** - Values, offerings, 60+ members badge
3. **Founderji** - 4 founders in single row (responsive)
4. **Zakaj Postati Član** - Benefits and reasons to join
5. **Footer** - Contact information and links

### Animations
- Floating hero logo
- Fade-in on scroll for cards
- Smooth scroll navigation
- Parallax effects
- Hover transformations
- Pulsing member count badge
- Animated counter
- Scroll-to-top button
- Subtle cursor trail (desktop only)

### Design Elements
- Black background with cyan (#5AC0D6) accents
- Hexagon patterns
- Diagonal stripes from logo
- Gradient overlays
- Glassmorphism effects
- Box shadows and glows

## 🔧 Setup Instructions

### 1. Save Founder Images
Follow instructions in `FOUNDER_IMAGES_INSTRUCTIONS.md` to save the 4 founder photos.

### 2. Open the Website
Simply open `index.html` in any modern web browser.

### 3. Deploy (Optional)
Upload all files to your web hosting or use:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Push to `gh-pages` branch

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

## 🎯 SEO Score

The website includes:
- ⭐ Meta descriptions
- ⭐ Open Graph tags
- ⭐ Structured data (JSON-LD)
- ⭐ Semantic HTML
- ⭐ Alt text on images
- ⭐ Fast loading times
- ⭐ Mobile-friendly design
- ⭐ Accessibility features

## 📊 Performance Tips

1. **Optimize Images**: Compress founder photos to ~100-200KB each
2. **Enable Caching**: Configure server cache headers
3. **Use CDN**: For faster global delivery
4. **Minify CSS/JS**: Use build tools for production

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-cyan: #5AC0D6;
    --secondary-cyan: #4AA8BC;
    --dark-bg: #0a0a0a;
    --darker-bg: #000000;
}
```

### Content
Edit text directly in `index.html` - all content matches the PDF exactly.

## 📞 Contact

- Website: [www.hive-org.com](https://www.hive-org.com)
- Email: office@hive-org.com

## 📄 License

© 2025 HIVE - Ekskluzivno Mednarodno Poslovno Združenje
