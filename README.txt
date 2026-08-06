SAMARA CARE ERP V9 – MEDICATION DECLARATION, PRESCRIBING DOCTOR & APP ICON
Version 2.8.4

INSTALLATION ORDER
1. Run 66_medication_declaration_and_prescribing_doctor.sql once in Supabase SQL Editor.
2. Replace app.js.
3. Upload/replace the complete icons folder.
4. Keep/upload assets/samara-logo.png.
5. Commit and press Ctrl + Shift + R.
6. For an installed PWA, uninstall/reinstall or clear the old app icon cache if the old SC icon remains.

COMPLETED
- Admission asks: Undergoing any prescribed medication?
- If No, medication rows are hidden and admission can be completed without medicine entries.
- Consent records: No prescribed medication declared at admission.
- If Yes, every medicine has a mandatory Prescribed Doctor field.
- Prescribed Doctor appears in the locked medicine summary and Admission Consent table.
- Existing/returning patient name and mobile may be corrected during re-admission.
- New Samara branded app icons replace the old SC icon.

The new build advances correctly from 2.8.3 to 2.8.4.
