import Seo from "../components/Seo";

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service - Wisal WhatsApp AI"
        description="Wisal Terms of Service for WhatsApp AI receptionist service. Transparent terms for Oman clinics."
      />
      
      <main className="container mx-auto px-4 py-24 max-w-3xl prose prose-lg prose-primary">
        <h1>Terms of Service</h1>
        <p>
          Welcome to Wisal. Please read these Terms of Service ("Terms") carefully before using our WhatsApp AI receptionist service.
        </p>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using Wisal, you agree to be bound by these Terms. If you do not agree, do not use our services.
        </p>
        <h2>Service Description</h2>
        <p>
          Wisal automates WhatsApp communication for clinics. We strive for accuracy but do not guarantee error-free AI performance.
        </p>
        <h2>User Responsibilities</h2>
        <p>
          You must provide accurate clinic information and maintain your WhatsApp Business account. You are responsible for escalation and patient privacy.
        </p>
        <h2>Payment and Cancellation</h2>
        <p>
          Our pricing is transparent and subscription-based. You may cancel anytime; no refunds for partial billing periods.
        </p>
        <h2>Data Privacy</h2>
        <p>
          We adhere to our Privacy Policy regarding data collection and usage. You consent to AI processing patient messages for service delivery.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          Wisal is not liable for any indirect damages or missed communications due to AI limitations or user error.
        </p>
        <h2>Changes to Terms</h2>
        <p>
          We may update these Terms periodically. Continued use after changes indicates acceptance.
        </p>
        <h2>Contact</h2>
        <p>
          Questions regarding these Terms should be sent to <a href="mailto:support@wisal.om">support@wisal.om</a>.
        </p>
        <p className="text-muted-foreground text-sm">Effective date: November 27, 2025</p>
      </main>
    </>
  );
}
