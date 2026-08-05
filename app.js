SAMARA CARE ERP – BILLING OPTION PATCH

1.  Change label: Care Package → Billing Option

2.  In the Billing Option , replace:

Select care package

with:

Select Billing Option No Package / Daily Billing

Keep the existing package list below it.

3.  Replace:

const selectedPackage = …

with:

const noPackageSelected = form.billing_package === “No Package / Daily
Billing”;

const selectedPackage = noPackageSelected ? null : carePackages.find( p
=> p.package_name === form.billing_package ) || null;

4.  Replace:

if(selectedPackage && selectedPackageFee()>0)

with:

if( !noPackageSelected && selectedPackage && selectedPackageFee() > 0 )

5.  Below the Billing Option dropdown add:

{ noPackageSelected &&

Daily Billing selected.

The resident will be billed using: • Daily Room Rent • Daily Nursing
Charges • Individual Bills & Charges

No fixed package amount will be charged.

}

Result: - “No Package / Daily Billing” bills daily room rent, nursing
and additional charges. - Admin-created packages bill the fixed package
amount.
