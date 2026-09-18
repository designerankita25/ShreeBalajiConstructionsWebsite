# Asset Directory & Image Organization Guide

This folder (`src/assets/images/`) is where you can store your own real construction and company images.

## Recommended Subfolders

```
src/assets/images/
├── hero/        # Hero background photos (high resolution, e.g. 1920x1080)
├── projects/    # Photos for your projects and case study galleries
├── services/    # Photos representing each construction service
├── about/       # Images showing your construction sites, equipment, safety
└── team/        # Professional headshots of executive leadership and engineers
```

## How to Use Your Own Local Images

### Method 1: Using the Public Folder (Simplest for Beginners)
1. You can also place images directly in a `public/images/` folder at the root of your project:
   ```
   public/images/projects/my-tower.jpg
   ```
2. Then in `src/data/projects.js` or `src/data/company.js`, reference it with a leading slash:
   ```javascript
   image: "/images/projects/my-tower.jpg"
   ```

### Method 2: Importing in JavaScript
In your component or data file, you can import images directly:
```javascript
import heroBg from '../assets/images/hero/crane-site.jpg';

// Then use heroBg as the image source:
<img src={heroBg} alt="Active construction site" />
```

## Image Dimension & Optimization Recommendations
* **Hero Images**: 1920 x 1080px (under 350KB, JPG or WebP format)
* **Project & Service Cards**: 800 x 600px (under 150KB)
* **Team Headshots**: 600 x 600px square (under 100KB)
* Use tools like [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) to compress photos before uploading.
