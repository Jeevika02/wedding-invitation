FOREVER STARTS HERE — HTML/CSS/JS WEDDING INVITATION
====================================================

No Node.js, npm, or build tools are required.

FILES
-----
index.html          One continuous, scrollable invitation
style.css           Mobile-first styling
script.js           Names, dates, venue, map link, navigation, gallery
images/temple-hero.png
                    Generated temple-night backdrop, already included
images/couple-1.jpg and couple-2.jpg
                    Photos for the "Forever Starts Here" section
images/couple-3.jpg through couple-8.jpg
                    Six gallery photos
images/reception-backdrop.jpg
                    Optional reception section backdrop
images/wedding-backdrop.jpg
                    Optional wedding section backdrop

ADD YOUR PHOTOS
---------------
Place your images in the images folder with the exact names listed above.
You can use JPG, PNG, or WebP, but if you use a different extension, update
the matching image path in index.html or style.css.
The hero uses the included images/temple-hero.png by default.

PERSONALISE
-----------
Open script.js and edit the invitation object at the top:
- bride and groom
- reception date and time
- wedding date and muhurtham time
- shared venue name and address
- shared Google Maps URL

Both event sections use the same venue and map link automatically.
There is no RSVP section or RSVP button.

PREVIEW
-------
Double-click index.html to open it in a browser.
Internet access is needed for Google Fonts; local fallback fonts are provided.

VERCEL DEPLOYMENT WITHOUT NODE/NPM
----------------------------------
1. Upload index.html, style.css, script.js, README.txt and the entire images
   folder to a GitHub repository.
2. Import the repository into Vercel.
3. Select the "Other" framework preset for a static site.
4. Set no build command; use "." as the output directory if Vercel requests one.
5. Deploy and test the resulting URL on your phone.
