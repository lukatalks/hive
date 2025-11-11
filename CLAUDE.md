# HIVE Business Community Website - Bilingual Documentation

## Project Overview
Modern, elegant bilingual website for **HIVE Business Community - Exclusive International Business Association**, a business community for entrepreneurs, managers, and leaders.

**Status:** ✅ **PRODUCTION READY** | **Version:** 2.1 - Form Integration & Tooltip Fixes

**Key Features:**
- Full bilingual support (Slovenian/English)
- Browser language detection
- Integrated membership application form with Google Sheets backend
- Updated branding: "HIVE Business Community"
- Montserrat font matching the logo
- Fixed tooltip positioning in Join Us section

---

## 📁 File Structure

```
HIVE one-pager/
├── index.html                               # Main bilingual HTML file
├── form.html                                # Membership application form
├── styles.css                               # Complete styling with Montserrat font
├── script.js                                # Interactive animations
├── translations.js                          # Bilingual translation system
│
├── Logo 1.png                              # Navigation & footer logo
├── hive_hero_logo.png                      # Hero section logo
│
├── mateja_zerbo.png                        # Founder photo (placeholder - AWAITING)
├── bosko_prastalo_new.png                  # Founder photos
├── mark_kalin_new.png
├── Marko_Hozjan_new.png
├── rok_kragelj_new.png                     # (AWAITING updated photo)
│
├── FORM_HANDLER_URL.txt                    # Google Sheets Web App URL (NEW)
├── GOOGLE_SHEETS_SETUP.md                  # Setup guide for form integration (NEW)
│
└── CLAUDE.md                               # THIS FILE
```

---

## 🌍 Bilingual System (NEW v2.0)

### Language Features
- **Automatic Detection**: Browser language detection sets initial language
  - Slovenian browsers → Slovenian content
  - All other browsers → English content (default)
- **Manual Switching**: Language selector in navigation (SL | EN)
- **Persistent**: Language preference saved in localStorage
- **Dynamic**: All content switches instantly without page reload

### Implementation
- **translations.js**: Centralized translation system
- **Data attributes**: `data-en` and `data-sl` on all translatable elements
- **Scope**: All pages (index.html and form.html) fully bilingual

### Typography
- **Primary Font**: Montserrat (matches HIVE logo)
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Loading**: Google Fonts with preconnect for optimal performance

---

## 🎨 Design Features

### Color Palette
```css
--primary-cyan: #5AC0D6        /* Main brand color */
--secondary-cyan: #4AA8BC      /* Hover states */
--dark-bg: #0a0a0a            /* Section backgrounds */
--darker-bg: #000000          /* Main background */
--text-light: #ffffff         /* Primary text */
--text-gray: #cccccc          /* Secondary text */
```

### Key Visual Elements
- **Background scattered dots**: Subtle cyan dots (opacity: 0.12, z-index: 9)
- **Smooth animations**: Hover effects, entrance animations, floating logo
- **Responsive design**: Fully responsive across all device sizes
- **Modern tooltips**: Cyan-bordered tooltips with backdrop blur
- **Language switcher**: Clean SL | EN toggle in navigation

---

## 📋 Page Sections

### INDEX.HTML - Main Page

#### 1. Navigation
- Fixed top navigation with logo
- Bilingual links: O HIVE-u / About HIVE, Ustanovitelji / Founders, Pridruži se / Join Us
- **Language switcher**: SL | EN toggle
- Smooth scroll behavior

#### 2. Hero Section
- Large floating logo with glow effect
- **Updated tagline**: "HIVE Business Community" / "EKSKLUZIVNO MEDNARODNO POSLOVNO ZDRUŽENJE"
- Description text (bilingual)
- **"POSTANI ČLAN/-ICA" / "BECOME A MEMBER"** CTA button → Links to form.html

#### 3. Naše Vrednote / Our Values
6 value cards with icons (all bilingual):
1. Iskrenost & zaupanje / Sincerity & Trust
2. Transparentnost / Transparency
3. Mušketirstvo / Musketeers Spirit
4. Diskretnost / Discretion
5. Lojalnost & profesionalnost / Loyalty & Professionalism
6. HIVE deluje kot družina / HIVE operates as a family

#### 4. Spoznaj ustanovitelje / Meet the Founders
**5 founders** in responsive grid:
1. **Mateja Zerbo** - direktorica / Director (NEW - first position)
2. Boško Praštalo
3. Mark Kalin
4. Marko Hozjan
5. Rok Kragelj

**Notes:**
- Mateja Zerbo photo is placeholder (awaiting actual photo)
- Rok Kragelj photo will be updated
- Grid adjusts: 3 columns on desktop, bottom 2 centered

#### 5. Kaj Ponujamo? / What We Offer?
6 offer cards (all bilingual):
1. **20+ dogodkov letno / events annually** (animated counter)
2. **HIVE app** (mobile icon)
3. **Mednarodno mreženje / International Networking** (globe icon)
4. **Soustvarjanje programa / Program Co-creation** (team icon)
5. **Podporno okolje / Supportive Environment** (support icon)
6. **Investicijske priložnosti / Investment Opportunities** (investment icon)

#### 6. Pridruži se / Join Us
- Checklist of 5 benefits with cyan checkmarks (all bilingual)
- 60+ ČLANOV / MEMBERS hexagon badge (pulsing animation)
- **"POSTANI ČLAN/-ICA" / "BECOME A MEMBER"** CTA button → Links to form.html

#### 7. Footer
- Logo, copyright (bilingual), contact info
- Website: www.hive-connect.org
- Email: info@hive-connect.org

---

### FORM.HTML - Membership Application (NEW)

**Purpose**: Integrated membership application form replacing external Google Form

**Sections:**
1. **VAŠI OSEBNI PODATKI** / **YOUR PERSONAL DATA**
   - Ime in priimek* / Full Name*
   - E-pošta* / Email*
   - Telefonska številka* / Phone Number*
   - Rojstni datum* / Date of Birth*
   - Kraj bivanja / Place of Residence
   - Billing information* (textarea)
   - Introduction* (textarea)

2. **VAŠ TRENUTNI STATUS** / **YOUR CURRENT STATUS**
   - Employment Status* (dropdown: Employed, Business Owner, Self-employed, Project Work, Other)
   - Company name*
   - Role/Function
   - Current activities* (textarea)
   - Skills and experience* (textarea)

3. **VAŠI DOSEŽKI** / **YOUR ACHIEVEMENTS**
   - 3 key achievements* (3 textareas)
   - Proudest achievement* (textarea)
   - Life motto* (textarea)

4. **VAŠ INTERES IN MOTIVACIJA** / **YOUR INTEREST AND MOTIVATION**
   - How did you learn about HIVE?
   - Reason for joining
   - Contribution areas* (textarea)
   - Expectations from HIVE* (textarea)
   - Future goals* (textarea)
   - Business references

5. **CONSENT** (2 required checkboxes)
   - Data processing consent*
   - Data accuracy confirmation*

**Features:**
- Fully bilingual (all labels, placeholders, buttons)
- Matches main site aesthetics
- Required fields marked with *
- Responsive design
- Form validation
- Thank you message on submission

---

## 🔧 Technical Implementation

### HTML Structure
- Semantic HTML5
- SEO optimized with meta tags
- Open Graph tags for social sharing
- JSON-LD structured data
- Accessible ARIA labels

### CSS Features
- CSS Grid for responsive layouts
- Flexbox for component alignment
- CSS animations (entrance, hover, pulse)
- Media queries for all device sizes
- Custom CSS variables for theming

### JavaScript Features
1. **Smooth scrolling** for navigation
2. **Intersection Observer** for fade-in animations
3. **Counter animation** for "60+" and "20+"
4. **Active nav highlighting** based on scroll position
5. **Scroll effects** (transition line fade-out)
6. **Mobile tooltip system** with backdrop and click handlers
7. **Cursor trail effect** (desktop only)
8. **Cookie notice** with localStorage

---

## 🎯 Key Design Decisions

### Icon for "Soustvarjanje programa"
**Final Choice:** Team collaboration icon (3 people)
- Represents co-creation and teamwork
- Clean, recognizable design
- Matches other icons in style

**Why not handshake:**
- Multiple handshake attempts were too complex/unclear
- Team icon better represents "program co-creation"

### Background Dots
**Configuration:**
- z-index: 9 (above backgrounds, below content)
- opacity: 0.12 (subtle but visible)
- All dots at full opacity (rgba 1) with varied sizes (1.5-2px)
- Fixed positioning, no animation

### Text Alignment Fix
**Issue:** "dogodkov letno" height inconsistent with other cards
**Solution:**
- Added `height: 80px` to `.offer-icon-large`
- Used flexbox to center "20+" vertically
- Ensures all card titles align at same height

---

## 📱 Responsive Breakpoints

```css
/* Desktop: 1024px+ */
- Full 3-column grids
- All features visible

/* Tablet: 768-1024px */
- 2-column grids
- Stacked navigation

/* Mobile: 480-768px */
- 2-column or single column
- Simplified layouts

/* Small Mobile: <480px */
- Single column
- Compact spacing
```

---

## ✨ Animations

### Entrance Animations
- **Hero logo**: Dramatic scale + rotate + glow (1.2s)
- **Hero text**: Fade + slide with blur (0.8s)
- **CTA button**: Pop in with bounce
- **Cards**: Staggered fade-in (100ms delay each)

### Hover Effects
- **Cards**: translateY(-5px) + lift
- **Icons**: scale(1.1) + color change to secondary-cyan
- **Navigation**: Underline expansion
- **Tooltips**: Fade in + slide

### Continuous Animations
- **Hero logo**: Floating (translateY -15px, 3s infinite)
- **Hexagon badge**: Pulse (scale 1.05, 3s infinite)

---

## 🔍 SEO Optimization

### Meta Tags ✅
- Title, description, keywords
- Open Graph for social sharing
- Twitter Card metadata
- Canonical URL

### Structured Data ✅
- JSON-LD Organization schema
- Founder information
- Contact details

### Best Practices ✅
- Semantic HTML
- Alt text on all images
- Lazy loading
- Fast loading times
- Mobile-friendly

---

## 🚀 Deployment Checklist

### Pre-Deployment ✅
- [x] All founder images present
- [x] All icons working correctly
- [x] Background dots visible
- [x] Text alignment fixed
- [x] Responsive design tested
- [x] Animations smooth
- [x] Links working (Google Form, email, website)
- [x] SEO tags complete

### Deployment Options

#### Option 1: Netlify (Recommended)
1. Create account at netlify.com
2. Drag and drop the entire folder
3. Connect custom domain: hive-connect.org
4. SSL automatically enabled

#### Option 2: Vercel
1. Install: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Connect domain in dashboard

#### Option 3: Traditional Hosting
1. Upload all files via FTP/SFTP
2. Ensure file permissions correct
3. Configure SSL certificate
4. Test all functionality

---

## 🎨 Icon Reference

### Offer Section Icons

1. **20+ dogodkov letno**: Large number display
2. **HIVE app**: Mobile phone icon
3. **Mednarodno mreženje**: Globe with latitude lines
4. **Soustvarjanje programa**: 3 people collaboration (team icon)
5. **Podporno okolje**: Person with plus sign
6. **Investicijske priložnosti**: Euro currency symbol

### Values Section Icons

1. **Iskrenost & zaupanje**: Stacked layers
2. **Transparentnost**: Square with X
3. **Mušketirstvo**: Multiple people
4. **Diskretnost**: Person silhouette
5. **Lojalnost**: Heart
6. **Hive deluje kot družina**: House

---

## 💡 Maintenance Notes

### Updating Content
- **Text changes**: Edit directly in `index.html`
- **Styling changes**: Modify `styles.css`
- **Add new sections**: Follow existing pattern with consistent spacing

### Adding New Icons
- Use stroke icons (not fill) for consistency
- viewBox: "0 0 24 24" (standard)
- stroke-width: "2" (standard)
- Color: `currentColor` (automatic cyan)

### Modifying Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-cyan: #5AC0D6;
    --secondary-cyan: #4AA8BC;
}
```

---

## 🐛 Known Issues & Solutions

### Issue: Background dots not visible
**Solution:** z-index: 9, opacity: 0.12, full dot opacity (rgba 1)

### Issue: Tooltip covering text
**Solution:** Equal height icons (80px) with flexbox centering

### Issue: Browser cache
**Solution:** Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

---

## 📞 Contact Information

**Website:** https://www.hive-connect.org
**Email:** info@hive-connect.org
**Membership Form:** form.html (integrated in website)

---

## 🎉 Version History

### v2.1 - Form Integration & Tooltip Fixes (Current) ✅
**Update - January 2025**

#### New Features:
- ✅ **Google Sheets integration** - Form submissions automatically logged to Google Sheets
- ✅ **Floating hero logo on form page** - Matches main page with smaller size and animations
- ✅ **Success popup enhancement** - Thank you message moved to popup instead of after submit button
- ✅ **Fixed Join Us tooltips** - Tooltips now appear directly after text ends (not at container edge)

#### Technical Fixes:
- Fixed tooltip positioning in "Pridruži se / Join Us" section
- Added `.reason-text-wrapper` to properly position tooltips relative to text
- Restructured HTML: tooltips moved from inside h4 to siblings wrapped in container
- Updated CSS: tooltips now position at `left: calc(100% + 12px)` from text end
- Google Apps Script URL implemented in form.html with no-cors mode
- URL saved in FORM_HANDLER_URL.txt for reference

#### Files Added:
- **FORM_HANDLER_URL.txt** - Contains Google Apps Script Web App URL for form submissions
- **GOOGLE_SHEETS_SETUP.md** - Complete setup guide for Google Sheets integration

#### Pending Tasks:
- Mateja Zerbo photo (placeholder currently shown)
- Updated Rok Kragelj photo

---

### v2.0 - Bilingual & Integrated Form ✅
**Major Update - January 2025**

#### New Features:
- ✅ **Full bilingual support** (Slovenian/English)
- ✅ **Browser language detection** with auto-selection
- ✅ **Language switcher** in navigation (SL | EN)
- ✅ **Integrated membership form** (form.html) replacing Google Form
- ✅ **Updated branding**: "HIVE Business Community"
- ✅ **Montserrat font** throughout site (matches logo)
- ✅ **New founder**: Mateja Zerbo (direktorica) added as first position
- ✅ **Updated CTA buttons**: "POSTANI ČLAN/-ICA" / "BECOME A MEMBER"

#### Content Changes:
- All sections fully translated to English
- Updated tagline for both languages
- Form with 5 sections and comprehensive questions
- Footer updated with bilingual copyright

#### Technical Improvements:
- translations.js for centralized language management
- localStorage for language preference persistence
- Data attributes (data-en, data-sl) for dynamic content
- Enhanced CSS with language switcher styling
- Founder grid adjusted for 5 people (3-column layout)

---

### v1.0 - Initial Production Ready
- ✅ All content complete
- ✅ All icons finalized
- ✅ Background dots visible
- ✅ Text alignment fixed
- ✅ Responsive design complete
- ✅ SEO optimized
- ✅ Animations polished

---

## 📚 Browser Support

**Fully Supported:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Features Used:**
- CSS Grid (all modern browsers)
- Flexbox (widely supported)
- CSS Variables (modern browsers)
- Intersection Observer (modern browsers)
- localStorage API (universally supported)
- Google Fonts API

---

## 🔄 Pending Tasks & Future Enhancements

### 📸 Image Updates (PRIORITY)

#### 1. Replace Rok Kragelj Photo
**Current file:** `rok_kragelj_new.png`
**Action:** Replace with updated photo
**Instructions:**
- Save the new photo with the exact filename: `rok_kragelj_new.png`
- Place in the same directory as other founder photos
- Recommended dimensions: ~280x320px (portrait orientation)
- Format: PNG with transparent background preferred

#### 2. Add Mateja Zerbo Photo
**Current file:** `mateja_zerbo.png` (placeholder showing "Photo Coming Soon")
**Action:** Add actual photo
**Instructions:**
- Save the photo with the exact filename: `mateja_zerbo.png`
- Place in the same directory as other founder photos
- Recommended dimensions: ~280x320px (portrait orientation)
- Format: PNG with transparent background preferred
- The code has an `onerror` handler that shows placeholder if image fails to load

### 📝 Optional Future Enhancements:
- Text corrections as needed
- Minor design adjustments
- Additional languages (if needed)
- Analytics integration
- Privacy Policy page
- Terms & Conditions page
- Email notifications for form submissions
- Admin dashboard for viewing submissions

---

## ✅ Final Status

**PRODUCTION READY - Version 2.1** ✅

This bilingual website is complete and ready for deployment. All major features are implemented and working correctly:

- ✅ Bilingual system functional (SL/EN)
- ✅ Browser language detection working
- ✅ Integrated membership form with Google Sheets backend
- ✅ Form submissions automatically logged to Google Sheets
- ✅ Updated branding implemented
- ✅ Montserrat font applied throughout
- ✅ 5 founders section updated
- ✅ All translations complete
- ✅ Responsive design maintained
- ✅ SEO optimized for both languages
- ✅ Tooltips properly positioned in all sections
- ✅ Floating logo on form page

**Remaining Tasks:**
- Replace `rok_kragelj_new.png` with updated photo
- Add `mateja_zerbo.png` (currently showing placeholder)

**Last Updated:** January 2025
**Status:** Production Ready
**Version:** 2.1 - Form Integration & Tooltip Fixes
