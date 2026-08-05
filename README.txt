SAMARA CARE ERP v2.7.5 – OFFLINE QR CONSENT PRINT

UPLOAD / REPLACE:
1. Replace app.js
2. Upload the complete vendor folder so the repository contains:
   vendor/qrcode.bundle.js

No SQL is required.

IMPORTANT:
Do not upload only app.js. The vendor/qrcode.bundle.js file is required for the offline QR code.

The consent no longer uses:
- cdn.jsdelivr.net
- html2pdf
- popup windows

Clicking Print / Save Admission Consent opens the normal browser Print dialog.
Choose a printer or select Save as PDF.
