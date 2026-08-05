SAMARA CARE ERP v2.8.0

UPLOAD / REPLACE:
1. app.js
2. vendor/qrcode.bundle.js

NO SQL REQUIRED.

NEW:
- Possible duplicate rows show Review & Delete.
- Duplicate review compares consent status, room, documents, billing and clinical history.
- Empty incorrect duplicates can be deleted after confirmation.
- Records with clinical or financial history are protected from direct deletion.
- Every Patient Master row includes Print Consent.
- If a signed consent exists, it is opened for printing.
- Otherwise, a fresh consent is reconstructed from current patient, medicines, care plan and fee structure.
