import { Button } from "../components/ui/button";
import { Smartphone, Clock, Globe, Shield, Calendar, Users, MessageCircle, Zap, CheckCircle } from "lucide-react";
import Seo from "../components/Seo";

const Features = () => {
  return (
    <>
      <Seo
        title="Features - Wisal WhatsApp AI Receptionist"
        description="Discover Wisal features: Arabic-first AI, 24/7 WhatsApp automation, smart appointment booking, and secure data handling for Oman clinics."
        keywords="WhatsApp AI features, Arabic AI, clinic automation features, appointment booking AI"
      />
      
      <div className="min-h-screen py-24">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
            Everything Your Clinic Needs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wisal handles WhatsApp overload so you can focus on patients, not messaging.
          </p>
        </section>

        {/* 4-Step Setup */}
        <section className="container mx-auto px-4 mb-24">
          <h2 className="text-3xl font-display font-bold text-center mb-16 text-foreground">
            Live in 15 Minutes
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "Connect WhatsApp",
                desc: "Link your existing WhatsApp Business number (1 min)",
              },
              {
                icon: Clock,
                title: "Upload Clinic Info",
                desc: "Add services, doctors, hours, FAQ (5 min)",
              },
              {
                icon: Calendar,
                title: "Set Availability",
                desc: "Sync Google Calendar or upload schedule (5 min)",
              },
              {
                icon: Zap,
                title: "Go Live Instantly",
                desc: "Start receiving AI-powered responses immediately",
              },
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/40 transition-all">
                  <step.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {i < 3 && (
                  <div className="w-2 h-2 mx-auto mt-8 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Feature Matrix */}
        <section className="container mx-auto px-4 mb-24">
          <h2 className="text-3xl font-display font-bold text-center mb-16 text-foreground">
            Arabic-First Intelligence
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl border hover:shadow-glow">
                <Globe className="w-12 h-12 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Native Arabic Support</h3>
                  <p className="text-muted-foreground">
                    Understands Omani dialects, medical terminology, and cultural context.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl border hover:shadow-glow">
                <Calendar className="w-12 h-12 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Booking</h3>
                  <p className="text-muted-foreground">
                    Books appointments directly to your calendar with conflict detection.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl border hover:shadow-glow">
                <Users className="w-12 h-12 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Escalation</h3>
                  <p className="text-muted-foreground">
                    AI confidence &lt;80%? Instantly transfers to your staff with full context.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl border hover:shadow-glow">
                <Shield className="w-12 h-12 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">GCC Data Security</h3>
                  <p className="text-muted-foreground">
                    Your patient data never leaves Oman/GCC region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 bg-gradient-to-r from-primary to-primary-glow rounded-3xl mx-6 -mt-12 relative shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to automate your WhatsApp?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground">
                See Pricing
              </Button>
              <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground">
                Book Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
