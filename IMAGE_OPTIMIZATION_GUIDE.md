# Image Optimization Guide

## ⚠️ IMPORTANT: Your Images Are Too Large!

Your current images are very large (some over 50MB), which is causing slow loading times. Here's what we've done and what you need to do:

## ✅ What We've Implemented:

1. **Lazy Loading** - Images now load only when they're about to enter the viewport
2. **Loading States** - Added smooth loading animations while images load
3. **Priority Loading** - Hero image loads first, others load as needed
4. **Async Decoding** - Images decode asynchronously to prevent blocking

## 🔧 What You Need to Do:

### Option 1: Compress Images (RECOMMENDED)

**For Web Use, Images Should Be:**
- **Hero images**: Max 500KB - 1MB
- **Gallery images**: Max 200KB - 500KB
- **Thumbnail images**: Max 100KB - 200KB

**Tools to Compress:**
1. **Online Tools:**
   - TinyPNG.com (for JPG/PNG)
   - Squoosh.app (Google's tool)
   - ImageOptim.com

2. **Desktop Tools:**
   - ImageOptim (Mac)
   - FileOptimizer (Windows)
   - GIMP (Free, all platforms)

3. **Command Line:**
   ```bash
   # Using ImageMagick (install first)
   magick convert input.jpg -quality 85 -resize 1920x1080 output.jpg
   ```

### Option 2: Convert to WebP Format

WebP images are 25-35% smaller than JPG with same quality:
- Use Squoosh.app to convert
- Update image paths in code from `.jpg` to `.webp`

### Option 3: Use Responsive Images

Create multiple sizes:
- `image-large.jpg` (1920px wide) - for hero
- `image-medium.jpg` (960px wide) - for galleries
- `image-small.jpg` (480px wide) - for thumbnails

## 📊 Current Image Sizes (TOO LARGE):

- `web 2.jpg`: **36.87 MB** → Should be ~500KB
- `_DSC0520.jpg`: **50.51 MB** → Should be ~500KB
- `_DSC0461.jpg`: **32.95 MB** → Should be ~500KB
- `card 001.jpg`: **4.51 MB** → Should be ~300KB
- Most DSC images: **8-30 MB each** → Should be ~200-500KB

## 🎯 Quick Fix Steps:

1. **Download a compression tool** (TinyPNG.com is easiest)
2. **Compress all images** to under 1MB each
3. **Replace the images** in `public/images/` folder
4. **Test the site** - it should load much faster!

## 💡 Pro Tips:

- **Hero image**: Compress to 80-85% quality, max 1920px width
- **Gallery images**: Compress to 75-80% quality, max 1200px width
- **Thumbnails**: Compress to 70% quality, max 600px width
- **Use WebP format** for even better compression

## 🚀 After Optimization:

Your site will:
- Load 10-20x faster
- Use less bandwidth
- Provide better user experience
- Improve SEO scores
- Reduce hosting costs

---

**Note**: The optimizations we've added will help, but compressing your images is essential for good performance!

