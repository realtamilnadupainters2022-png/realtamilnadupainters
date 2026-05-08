## Changes

### 1. Update stats on homepage and about page
- Change "4+ Years Experience" to "14+ Years Experience" in `src/routes/index.tsx` (stats array, line 29)
- Change "100+ Projects Done" to "500+ Projects Done" (line 28)
- Update the about page (`src/routes/about.tsx`) similarly: "4+" to "14+" years, "100+" to "500+" projects

### 2. Update founder section with award mention
- Add to the founder bio paragraph (line 137 in index.tsx): "Rajesh got the Best Painting Contractor in Tamil Nadu award from Asian Paints."
- Add the same line to the about page founder section

### 3. Replace gallery images with real project photos
- Copy all 9 uploaded photos into `src/assets/` as project work images (e.g., `project-1.jpg` through `project-9.jpg`)
- Replace the 3 gallery images on the homepage (Recent Projects section) with 3 of the uploaded photos
- Replace the 6 gallery images on the gallery page (`src/routes/gallery.tsx`) with 6 of the uploaded photos
- Update project titles/descriptions to match the real work shown (exterior painting, interior texture, geometric wall art, etc.)

### 4. Add logo as background in services section
- In the "Our Services" section on the homepage (line 93), add the logo image (`src/assets/logo.png`) as a subtle watermark/background element with low opacity behind the services grid

### Files to modify
- `src/routes/index.tsx` — stats, founder bio, gallery images, services section background
- `src/routes/about.tsx` — stats and founder bio
- `src/routes/gallery.tsx` — replace all gallery images
- Copy 9 uploaded images into `src/assets/`
