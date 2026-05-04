# Professional Research Portfolio

A clean, minimalist academic portfolio website inspired by top research profiles: Marius Zoican, Esther Rolf, and Swiss academic standards.

## Features

✨ **Modern Minimalist Design**
- Editorial aesthetic emphasizing content over decoration
- Generous whitespace and clean typography
- Professional yet approachable

🌓 **Dark/Light Mode**
- Toggle theme with button in top-right
- Preference saved to browser
- Smooth transitions

📱 **Fully Responsive**
- Mobile-first design
- Works on all devices
- Touch-friendly

♿ **Accessible**
- Semantic HTML
- WCAG compliance
- Keyboard navigation

⚡ **Fast & Simple**
- No frameworks, no build step
- Pure HTML, CSS, JavaScript
- Just open and use

## File Structure

```
Test 1/
├── index.html      # Main portfolio page
├── styles.css      # All styling (light/dark modes)
├── script.js       # Theme toggle & interactions
├── assets/
│   ├── profile.jpg # Your profile photo (200x200px)
│   └── cv.pdf      # Your CV for download
└── README.md       # This file
```

## How to Use

### 1. Update Your Information

Open `index.html` and find/replace:

- `Your Name` → Your actual name
- `your.email@example.com` → Your email
- `yourprofile` → Your GitHub/LinkedIn usernames
- Update all content sections with your bio, research, projects, etc.

### 2. Add Your Profile Photo

1. Save a photo (200x200px minimum) as `assets/profile.jpg`
2. Formats: JPG, PNG, WebP
3. Make sure it's professional and well-lit

### 3. Add Your CV

1. Save your CV as `assets/cv.pdf`
2. Users can download it via the "Download CV" button

### 4. Test Locally

**Option A: Python Server (Recommended)**
```bash
cd "Test 1"
python -m http.server 8000
# Open http://localhost:8000
```

**Option B: Live Server (VS Code)**
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

**Option C: Open directly**
- Simply double-click `index.html` (works but no server)

### 5. Customize Styling (Optional)

Open `styles.css` and modify:

```css
:root {
    --primary: #1a1a1a;        /* Main text color */
    --accent: #0066cc;          /* Link & button color */
    --bg: #ffffff;              /* Background */
    --max-width: 820px;         /* Content width */
    /* ... more variables ... */
}
```

Common customizations:
- Change accent color for links
- Adjust max-width for narrower/wider content
- Modify fonts by changing `--font-sans`

## Content Sections

### Hero
- Profile photo
- Name & tagline
- Quick CTA buttons

### About
- Professional summary
- Research interests

### Research
- Working papers
- Publications with links

### Projects
- SNSF/main projects
- Key highlights

### Skills
- Quantitative methods
- Programming languages
- Finance expertise
- Tools & platforms

### Education & Experience
- Degrees & dates
- Work history
- Key roles

### Contact
- Email link
- Social media links (LinkedIn, GitHub, Google Scholar)

## Customization Examples

### Change accent color (e.g., from blue to teal)

```css
:root {
    --accent: #008080;  /* Teal instead of blue */
}
```

### Make content wider

```css
:root {
    --max-width: 900px;  /* Instead of 820px */
}
```

### Change fonts

```css
:root {
    --font-sans: 'Georgia', serif;  /* Serif instead of sans-serif */
}
```

## Dark Mode

- **Automatic:** Respects system preference (Windows/Mac)
- **Manual:** Click moon/sun icon in top-right
- **Persisted:** Browser remembers your choice

The CSS variables handle all color transitions automatically.

## Sections Guide

### Each Section Should Include

**About:**
- 2-3 paragraphs about your research
- Your main academic interests
- Brief bio

**Research:**
- Working papers with descriptions
- Published papers with DOI links
- Links to PDFs/SSRN where applicable

**Projects:**
- SNSF project or main research project
- Key highlights (bullet points)
- Impact or outcomes

**Skills:**
- Group by category (Methods, Programming, Finance, Tools)
- Be specific: "Python (Pandas, NumPy, Scikit-learn)"
- Avoid generic skills ("hard worker")

**Education & Experience:**
- Degrees with universities and years
- Roles with institutions and dates
- 1-2 line descriptions

**Contact:**
- Email address
- LinkedIn profile URL
- GitHub profile URL
- Google Scholar profile (optional)

## Performance Tips

1. **Profile Photo**
   - Keep under 200KB
   - Use JPG or WebP
   - Dimensions: 200x200px minimum

2. **CV File**
   - Keep PDF reasonably sized
   - Compress if possible

3. **Browser**
   - Works in all modern browsers
   - No special plugins needed

## Deployment

### Option 1: GitHub Pages (Recommended)

```bash
cd "Test 1"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

Your site will be live at `https://username.github.io` (or custom domain).

### Option 2: Netlify

1. Go to https://netlify.com
2. Drag & drop the `Test 1` folder
3. Netlify publishes it automatically

### Option 3: Any Web Host

1. Upload all files to your server
2. Ensure `index.html` is in root
3. Done!

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## Accessibility

- Semantic HTML structure
- Focus indicators on all links
- Color contrast compliant
- Keyboard navigation fully supported
- Dark mode respects system preferences

## Mobile Optimization

- Responsive breakpoints at 768px
- Touch-friendly button sizes
- Readable text on all devices
- Optimized images

## No Build Step Required

Unlike Jekyll or other static generators:
- No Ruby installation needed
- No npm/Node installation needed
- No build command
- Just edit HTML/CSS/JS and refresh browser

## Tips for Better Results

1. **Keep it concise**
   - Research descriptions: 2-3 sentences
   - Avoid walls of text

2. **Use consistent formatting**
   - Same date format throughout
   - Consistent section structure

3. **Update regularly**
   - Add new papers as published
   - Update project descriptions
   - Keep CV current

4. **Proofread carefully**
   - Academic portfolio reflects on you
   - Check for typos and grammar
   - Ask colleague to review

5. **Professional photos**
   - Use good lighting
   - Neutral background
   - Friendly, approachable expression

## Need Help?

1. Check HTML/CSS for typos
2. Test in multiple browsers
3. Compare with example references (links in HTML)
4. Use browser DevTools to debug CSS
5. Test dark mode both ways

## License

Free to use and modify. Feel free to adapt this template for your needs.

---

**Built with:** HTML5, CSS3, JavaScript  
**Inspired by:** Marius Zoican, Esther Rolf, Swiss academic standards  
**No frameworks, no dependencies, no build step.**

Enjoy! 🎓
