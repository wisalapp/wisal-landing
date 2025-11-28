import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-10 border-t border-border mt-32">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-muted-foreground">
        <div>
          <h3 className="font-semibold text-lg mb-4 text-foreground">Wisal</h3>
          <p>Your WhatsApp AI receptionist, built for Oman clinics.</p>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} Wisal. All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-semibold text-md mb-4 text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:support@wisal.om" className="hover:text-primary">support@wisal.om</a></li>
            <li><a href="tel:+96812345678" className="hover:text-primary">+968 1234 5678</a></li>
            <li><a href="https://wa.me/96812345678" className="hover:text-primary">WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-md mb-4 text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
