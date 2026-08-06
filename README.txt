SAMARA CARE ERP V9 – NUMBER LAYOUT AND APP ICON FIX
Version 2.8.5

UPLOAD / REPLACE
1. app.js
2. index.html
3. manifest.webmanifest
4. service-worker.js
5. Complete icons folder
6. Keep/upload assets/samara-logo.png

CORRECTED
- Medicine and care-plan serial numbers now occupy their own header area.
- Number circles no longer overlap labels or input fields.
- Medicine fields wrap cleanly into additional rows according to screen width.
- Master care-plan row is also aligned correctly.
- Rebuilt all PWA/app icons using the approved Samara logo.
- Added cache-busting icon URLs to the manifest, index and service worker.

IMPORTANT FOR THE OLD SC ICON
Windows and installed PWAs cache app icons separately. After uploading and committing:
1. Press Ctrl + Shift + R.
2. Close the installed Samara app.
3. Uninstall the existing Samara PWA from Windows/Chrome.
4. Reopen the website and install the app again.
The newly installed app will use the Samara logo icon.

No SQL is required for this correction.
