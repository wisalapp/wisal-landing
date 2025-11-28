import Link from "next/link";
import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-primary font-display">
          Wisal
        </Link>

        <nav className="hidden md:flex space-x-8 text-foreground font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/demo" className="px-4 py-2 bg-whatsapp text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
            <PhoneCall className="w-4 h-4 mr-2 inline" />
            Book Demo
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border shadow-lg py-4">
          <ul className="space-y-4 text-center font-medium">
            <li><Link href="/" className="block py-2 text-lg hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/features" className="block py-2 text-lg hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Features</Link></li>
            <li><Link href="/pricing" className="block py-2 text-lg hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="/blog" className="block py-2 text-lg hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" className="block py-2 text-lg hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/demo" className="block py-2 bg-whatsapp text-white rounded-full mx-8 px-6 font-semibold" onClick={() => setMobileMenuOpen(false)}>Book Demo</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
