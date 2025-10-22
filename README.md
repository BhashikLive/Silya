# Silya.in - Kids Marathi Style Clothing Website

Welcome to Silya.in, a beautiful local website for kids' Marathi style shirts and pants!

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Cultural Theme**: Beautiful Marathi cultural colors (saffron, royal blue, golden yellow)
- **Interactive Elements**: Shopping cart, search, product filtering, and smooth animations
- **Modern UI/UX**: Clean, professional design with hover effects and transitions
- **Complete E-commerce Layout**: Product pages, about us, contact form, and more

## 📁 File Structure

```
Silya/
├── index.html          # Main homepage
├── shirts.html         # Shirts product page
├── pants.html          # Pants product page
├── about.html          # About us page
├── contact.html        # Contact page with form
├── styles.css          # Main stylesheet with Marathi colors
├── script.js           # Interactive JavaScript functionality
├── images/            # Folder for product and other images
└── README.md          # This file
```

## 🎨 Design Features

### Color Palette (Marathi Cultural Theme)
- **Primary Orange**: #FF6B35 (Marathi saffron)
- **Royal Blue**: #003366 (Traditional blue)
- **Golden Yellow**: #FFD700 (Prosperity gold)
- **Earth Brown**: #8B4513
- **Cream**: #FFF8DC
- **Forest Green**: #228B22

### Typography
- **Font**: Poppins (modern, readable)
- **Marathi Text**: Includes Devanagari script elements

## 🚀 How to Use

1. **Open the Website**: Double-click on `index.html` to open in your web browser
2. **Navigate**: Use the navigation menu to explore different sections
3. **Products**: Browse shirts and pants with filtering options
4. **Shopping Cart**: Add items to cart (demo functionality)
5. **Contact**: Use the contact form to get in touch

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🛍️ Key Features

### Homepage
- Hero section with cultural messaging
- Featured products showcase
- Category navigation
- Newsletter signup
- Social media links

### Product Pages
- Product filtering by category
- Size selection
- Add to cart functionality
- Product ratings and reviews
- Quick view options

### Shopping Cart
- Add/remove items
- Quantity management
- Price calculation
- Local storage persistence

### Contact & About
- Detailed company information
- Contact form with validation
- FAQ section
- Business hours and location

## 🔧 Customization

### Adding Images
1. Add your product images to the `images/` folder
2. Update the `src` attributes in HTML files:
   - `images/hero-image.jpg` - Hero section image
   - `images/product1.jpg` to `product6.jpg` - Product images
   - `images/shirts-category.jpg` - Shirts category image
   - `images/pants-category.jpg` - Pants category image

### Updating Content
- **Products**: Edit the product cards in `shirts.html` and `pants.html`
- **Company Info**: Update details in `about.html` and `contact.html`
- **Contact Details**: Modify phone, email, and address in all pages
- **Colors**: Adjust the CSS variables in `styles.css`

### Adding New Products
1. Copy an existing product card HTML structure
2. Update the product details (name, price, description)
3. Add appropriate `data-category` attribute for filtering
4. Add corresponding product image

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

## 📞 Contact Information (Demo)

- **Phone**: +91 98765 43210
- **Email**: info@silya.in
- **Address**: Mumbai, Maharashtra
- **Website**: silya.in (local demo)

## 🎯 Target Audience

- Parents looking for traditional Marathi clothing for kids
- Families celebrating Marathi culture and festivals
- Anyone interested in authentic Indian children's fashion

## 🔮 Future Enhancements

- Payment gateway integration
- User account system
- Product reviews and ratings
- Multi-language support (Marathi/English)
- Real-time inventory management
- Mobile app version

## 📋 Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript**: ES6+ features
- **Responsive**: Mobile-first approach
- **SEO**: Optimized meta tags and structure
- **Performance**: Optimized images and code

## 🎉 Getting Started

1. Download all files to your computer
2. Keep all files in the same folder
3. Double-click `index.html` to open
4. Enjoy exploring your Marathi kids' fashion website!

---

**Note**: This is a demonstration website. For a live e-commerce site, you would need:
- Web hosting service
- Domain name (silya.in)
- Backend database for products
- Payment processing system
- Order management system

**Made with ❤️ for Marathi culture and traditions**

---

## 🌍 Deploy (shareable link)

This is a static website, so you can host it for free and share a public link. Pick any option below.

### Option A — Netlify (easiest: drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the entire `Silya` folder into the page
3. Netlify will upload and give you a live link instantly (you can rename the site)

Included file: `netlify.toml` (already configured) — no build step needed.

### Option B — GitHub Pages (free, via repository)
1. Create a new GitHub repository (public)
2. Push this folder to GitHub
3. In the repo: Settings → Pages → Build and deployment → Set to “Deploy from a branch” → Branch: `main` (root) → Save
4. Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

Optional PowerShell commands (Windows) to publish:

```powershell
# Initialize repo (run inside the Silya folder)
git init
git add .
git commit -m "Initial commit"

# Replace with your repo URL
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### Option C — Vercel (fast, free)
1. Go to https://vercel.com and click “New Project”
2. Import your GitHub repo (or use the Vercel CLI)
3. Framework preset: “Other” (Static)
4. Deploy → you’ll get a live URL

Included file: `vercel.json` (optional) — sets clean URLs and caching headers.

### Option D — Cloudflare Pages (also free)
1. Go to Cloudflare Dashboard → Pages → Create a project
2. Connect to your GitHub repo and select the project
3. Build settings: No build command, Output directory: `/` (root)
4. Deploy → get public URL

---

## 🧪 Local preview (optional)

You can keep using the local server for quick previews, but it’s not necessary for hosting. If port 3001 is busy, stop the running instance first or change the port.
