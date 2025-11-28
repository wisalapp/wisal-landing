import { Button } from "../components/ui/button";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";
import Seo from "../components/Seo";

const Contact = () => {
  const [formData, setFormData] = useState({
    clinicName: "",
    whatsappNumber: "",
    email: "",
    dailyMessages: "100-200",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/96812345678?text=Hi Wisal! I'm interested in demo for ${formData.clinicName}`, "_blank");
    setFormData({ clinicName: "", whatsappNumber: "", email: "", dailyMessages: "100-200", message: "" });
  };

  return (
    <>
      <Seo
        title="Contact Wisal - WhatsApp AI Demo for Oman Clinics"
        description="Book a WhatsApp demo or contact Wisal AI team. Oman-based support for clinic automation."
        keywords="Wisal contact, WhatsApp AI demo, Oman clinic support"
      />
      
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
              Let's Talk WhatsApp
            </h1>
            <p className="text-xl text-muted-foreground">
              Get your free WhatsApp audit or book a live demo. We're Oman-based.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-8">Demo Request</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Clinic Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clinicName}
                    onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-2xl bg-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Muscat Dental Clinic"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-2xl bg-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+968 1234 5678"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="clinic@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Daily Messages
                    </label>
                    <select
                      value={formData.dailyMessages}
                      onChange={(e) => setFormData({ ...formData, dailyMessages: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-2xl bg-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option>50-100</option>
                      <option>100-200</option>
                      <option>200-500</option>
                      <option>500+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message (optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-2xl bg-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your clinic..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-elegant hover:shadow-glow">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send to WhatsApp
                </Button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Us Directly</h2>
              
              <div className="space-y-6">
                <div className="flex items-center p-6 bg-card border rounded-2xl hover:shadow-glow transition-all">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">WhatsApp</h3>
                    <a href="https://wa.me/96812345678" className="text-primary font-medium hover:underline">
                      +968 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-card border rounded-2xl hover:shadow-glow transition-all">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Phone</h3>
                    <a href="tel:+96812345678" className="text-primary font-medium hover:underline">
                      +968 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-card border rounded-2xl hover:shadow-glow transition-all">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Email</h3>
                    <a href="mailto:support@wisal.om" className="text-primary font-medium hover:underline">
                      support@wisal.om
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border rounded-2xl">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-secondary mr-3" />
                  <h3 className="font-semibold text-foreground">Oman-Based Team</h3>
                </div>
                <p className="text-muted-foreground">
                  Muscat, Oman • Serving GCC clinics • Arabic-first support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
