---
title: Optimize your Ghost site for better SEO
description: Learn how to fix SEO issues and improve your Ghost site's search engine visibility.
---

<!--# How to optimize Ghost for search engines -->

## Introduction

If your Ghost site isn't appearing in Google search results, or it's ranking poorly compared to competitors, you're not alone. While Ghost includes solid SEO features by default, you still need to configure them properly to get the best results.  

This guide will show you step by step how to optimize Ghost for search engines, from setting up basic SEO options to enabling advanced features and submitting your site to search engines.

## Instructions

### Step 1: Configure Basic SEO Settings

1. **Go to Settings → General**
   - Set your **Site Title** (appears in search results)
   - Add a **Site Description** (meta description for your homepage)
   - Upload a **Site Icon** (favicon that appears in browser tabs)

2. **Configure Publication Settings**
   - Set your **Publication Language** (helps search engines understand your content)
   - Choose your **Timezone** (affects when content is indexed)

### Step 2: Optimize Individual Posts

1. **For each post, go to Settings → Meta data**
   - Add a **Meta Title** (appears as the blue link in search results)
   - Write a **Meta Description** (appears as the snippet below your title)
   - Add **Meta Image** (appears when your post is shared on social media)

2. **Use SEO-friendly URLs**
   - Ghost automatically creates clean URLs like `/your-post-title/`
   - Avoid special characters and keep URLs under 60 characters

### Step 3: Enable Advanced SEO Features

1. **Go to Settings → Advanced**
   - Enable **Search Engine Visibility** (allows search engines to crawl your site)
   - Add **Google Analytics** tracking code
   - Add **Google Search Console** verification code

2. **Configure Structured Data**
   - Ghost automatically generates JSON-LD structured data
   - This helps search engines understand your content better

### Step 4: Optimize Content for Search Engines

1. **Use proper heading structure**
   - H1 for post titles (only one per page)
   - H2 for main sections
   - H3 for subsections

2. **Add alt text to images**
   - Describe what's in the image
   - Include relevant keywords naturally

3. **Use internal linking**
   - Link to other posts on your site
   - Use descriptive anchor text

### Step 5: Submit to Search Engines

1. **Google Search Console**
   - Add your site to Google Search Console
   - Submit your sitemap (usually `/sitemap.xml`)
   - Monitor your search performance

2. **Bing Webmaster Tools**
   - Add your site to Bing Webmaster Tools
   - Submit your sitemap there as well

## Troubleshooting Common Issues

### My site isn't being indexed
**Solution**: 
- Check if "Search Engine Visibility" is enabled in Settings → Advanced  
- Verify your robots.txt file allows crawling  
- Submit your sitemap to Google Search Console  

### My meta descriptions aren't showing
**Solution**:
- Ensure meta descriptions are under 160 characters  
- Make sure they're unique for each post  
- Avoid duplicate meta descriptions  

### My site loads slowly
**Solution**:
- Optimize images (use WebP format when possible)  
- Enable Ghost's built-in caching  
- Consider using a CDN  
