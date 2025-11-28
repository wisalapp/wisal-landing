import Seo from "../components/Seo";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy - Wisal WhatsApp AI"
        description="Wisal Privacy Policy: How we protect clinic and patient data with Oman/GCC data residency and enterprise security."
      />
      
      <main className="container mx-auto px-4 py-24 max-w-3xl prose prose-lg prose-primary">
        <h1>Privacy Policy</h1>
        <p>
          At Wisal, we are committed to protecting your privacy. We collect only the data necessary to provide and improve our WhatsApp AI receptionist service for clinics.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect your clinic's WhatsApp number, name, and message data only to automate and escalate patient communications securely.
        </p>
        <h2>How We Use Your Data</h2>
        <p>
          Your data is used solely to provide AI-powered responses and appointment booking. We do not sell or share your data with third parties.
        </p>
        <h2>Data Security</h2>
        <p>
          Wisal stores data securely within Oman/GCC region data centers and follows industry best practices to protect your patient information.
        </p>
        <h2>Your Choices</h2>
        <p>
          You can request deletion of your data or cancel your service at any time. Contact us at <a href="mailto:support@wisal.om">support@wisal.om</a> for assistance.
        </p>
        <h2>Updates to This Policy</h2>
        <p>
          We may update this policy occasionally to comply with laws or improve privacy. Changes will be posted on this page with an updated date.
        </p>
        <p className="text-muted-foreground text-sm">Effective date: November 27, 2025</p>
      </main>
    </>
  );
}
