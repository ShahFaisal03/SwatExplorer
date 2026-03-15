# 🏔 SwatExplorer — Discover the Switzerland of Pakistan

> A beautiful, modern, fully responsive tourism website for **Swat Valley, Khyber Pakhtunkhwa, Pakistan** — built with pure HTML5, CSS3 and vanilla JavaScript. No frameworks, no dependencies.

🌐 **Live Site:** [swatexplorer.netlify.app](https://swatexplorer.netlify.app)  
📁 **Repository:** [github.com/yourusername/SwatExplorer](https://github.com/yourusername/SwatExplorer)  
👤 **Author:** Shah Faisal — Mingora, Swat Valley, Pakistan

---

## 📸 Preview

![SwatExplorer Hero](https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80)

---

## ✨ Features

### 🎨 Design
- Premium modern UI with cinematic hero sections
- Glassmorphism cards, gradients and blur effects
- Mobile-first, fully responsive on all screen sizes
- Google Fonts — Playfair Display + Inter
- Custom 🏔 favicon in browser tab
- Deep forest green, river blue and warm orange color palette

### 🎬 Animations
- Scroll reveal animations — fade up, fade left/right, scale
- Staggered card animations on attractions grid
- Slow Ken Burns zoom effect on all hero backgrounds
- Unique per-page hero effects:
  - 💧 Jarogo — animated rain drops falling
  - 🌲 Ushu Valley — floating leaves (🍃🍂🌿🍁)
  - 🪨 Butkara — golden dust particles
- Animated scroll hint with mouse wheel indicator
- Smooth scroll on all navigation links

### 🗺 Navigation
- Fixed frosted-glass navbar with scroll effect
- Click-based dropdown showing all 9 attraction links
- Slide-in mobile drawer with all pages listed
- "Book Now" CTA button linking to dedicated booking page
- Back button on all attraction pages

### 📄 Pages (12 total)
| Page | Description |
|---|---|
| `index.html` | Main homepage with all sections |
| `booking.html` | Dedicated full booking page |
| `404.html` | Custom error page with mountain theme |
| `malam-jabba.html` | Malam Jabba Ski Resort |
| `kalam.html` | Kalam Valley |
| `mahodand.html` | Mahodand Lake |
| `bahrain.html` | Bahrain Riverside Town |
| `white-palace.html` | White Palace Marghazar |
| `fizagat.html` | Fizagat Park |
| `jarogo.html` | Jarogo Waterfall |
| `butkara.html` | Butkara Stupa |
| `ushu-valley.html` | Ushu Valley |

### 🏞 Attractions (9 places)
| # | Attraction | Type | Distance |
|---|---|---|---|
| 1 | ⛷ Malam Jabba | Ski Resort | 68 km |
| 2 | 🏔 Mahodand Lake | Alpine Lake | 98 km |
| 3 | 🌿 Kalam Valley | Alpine Valley | 99 km |
| 4 | 🏘 Bahrain | Riverside Town | 64 km |
| 5 | 🌳 Fizagat Park | Riverside Park | 8 km |
| 6 | 🪨 Butkara Stupa | Buddhist Heritage | 3 km |
| 7 | 🏰 White Palace | Royal Palace | 13 km |
| 8 | 💧 Jarogo Waterfall | Waterfall | 101 km |
| 9 | 🌲 Ushu Valley | Ancient Forest | 105 km |

### ✈ Booking System
- Full booking form — choose destination, trip type, guests, dates, accommodation, budget
- 5 package options per attraction page
- Confirmation modal with full booking summary
- Auto-generated booking reference (e.g. `SWT-955414`)
- WhatsApp integration → opens chat with **03305412327**
- Pre-filled WhatsApp message with all booking details

### 📞 Contact
- WhatsApp: **03305412327** — direct chat link
- Email: **shahf29887@gmail.com** — mailto link
- Location: **Mingora, Swat, KPK** — Google Maps embed + link

---

## 📁 Project Structure

```
SwatExplorer/
│
├── 📄 index.html               # Homepage
├── 📄 booking.html             # Booking page
├── 📄 404.html                 # Error page
├── 📄 malam-jabba.html         # Malam Jabba Ski Resort
├── 📄 kalam.html               # Kalam Valley
├── 📄 mahodand.html            # Mahodand Lake
├── 📄 bahrain.html             # Bahrain Town
├── 📄 white-palace.html        # White Palace Marghazar
├── 📄 fizagat.html             # Fizagat Park
├── 📄 jarogo.html              # Jarogo Waterfall
├── 📄 butkara.html             # Butkara Stupa
├── 📄 ushu-valley.html         # Ushu Valley
│
├── 📂 css/
│   ├── global.css              # Shared styles — nav, footer, animations
│   ├── home.css                # Homepage only styles
│   ├── attraction.css          # All attraction pages shared styles
│   └── booking.css             # Booking page styles
│
├── 📂 js/
│   ├── main.js                 # Shared JS — nav, scroll, drawer, animations
│   ├── attraction.js           # Lightbox, package selector, booking submit
│   └── booking.js              # Booking form logic, modal, WhatsApp message
│
└── 📂 images/
    ├── my-photo.jpg            # Author photo (About section)
    └── bahrain.jpg             # Bahrain custom image
```

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure for all 12 pages |
| **CSS3** | Custom animations, glassmorphism, gradients, responsive grid |
| **Vanilla JavaScript** | Nav, scroll animations, booking logic, WhatsApp integration |
| **Google Fonts** | Playfair Display (headings) + Inter (body) |
| **Unsplash API** | High quality placeholder images |
| **Google Maps Embed** | Location map in contact section |
| **WhatsApp API** | Direct booking via wa.me link |

> ⚡ Zero frameworks · Zero dependencies · Pure static site

---

## 🚀 Deployment

- Hosted on **Netlify** via **GitHub auto-deploy**
- Every push to `main` branch automatically updates the live site
- No build step required — pure static files

### Deploy yourself:
```
1. Fork this repo
2. Go to netlify.com → Add new site → Import from Git
3. Select this repo → Deploy
```

---

## 💻 Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/SwatExplorer.git

# Open in VS Code
code SwatExplorer

# Open index.html with Live Server extension
# Right click index.html → Open with Live Server
```

---

## 📞 Contact & Booking

| Method | Details |
|---|---|
| 📱 WhatsApp | [03305412327](https://wa.me/923305412327) |
| 📧 Email | [shahf29887@gmail.com](mailto:shahf29887@gmail.com) |
| 📍 Location | Mingora, Swat Valley, KPK, Pakistan |

---

## 👤 Author

**Shah Faisal**  
📍 Mingora, Swat Valley, Khyber Pakhtunkhwa, Pakistan

> *"Made with ❤ for the beautiful people and places of Swat Valley"*

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use it as inspiration — please give credit if you do.

© 2025 SwatExplorer · Shah Faisal · Mingora, Swat

---

## ⭐ Support

If you like this project, please give it a **⭐ star** on GitHub!  
It helps others discover SwatExplorer and supports the work. 🙏