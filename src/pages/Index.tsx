import { Button } from "../components/ui/button";
import { Phone, MessageCircle, Clock, Shield, Users, Smartphone, Calendar } from "lucide-react";
import { useState } from "react";
import ThreeBenefits from "../components/landing/ThreeBenefits";
import PricingTeaser from "../components/landing/PricingTeaser";
import Testimonials from "../components/landing/Testimonials";
import DemoModal from "../components/landing/DemoModal";
import Seo from "../components/Seo";

const Index = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <>
      <Seo
        title="Wisal - WhatsApp AI Receptionist for Oman Clinics"
        description="Automate your clinic's WhatsApp with Wisal AI receptionist. Arabic-first, 24/7 patient messaging, appointment booking, and staff-freeing automation tailored for Oman and GCC clinics."
        keywords="WhatsApp AI, Oman clinics, Arabic AI, healthcare automation, appointment booking"
      />

      <DemoModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 max-w-lg lg:max-w-md text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 bg-secondary/20 rounded-full text-secondary font-medium text-xs md:text-sm mx-auto lg:mx-0">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
              Arabic-first • Oman/GCC • 24/7
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-tight">
                Your WhatsApp Receptionist
                <span className="block text-xl md:text-2xl lg:text-4xl font-normal text-foreground/80 mt-2">
                  That Never Sleeps
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                Handles 80% of patient messages automatically. Setup in 1 day. 
                Built for Oman & GCC clinics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="group shadow-elegant hover:shadow-glow px-6 lg:px-8 text-base"
                onClick={() => setShowDemoModal(true)}
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Book WhatsApp Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 lg:px-8 text-base border-2"
              >
                Start Free Trial
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start text-xs md:text-sm text-muted-foreground">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              <span>100% data privacy • Cancel anytime</span>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-border/50 max-w-sm mx-auto lg:max-w-md lg:ml-auto">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base text-foreground">Wisal AI</div>
                  <div className="text-xs md:text-xs text-muted-foreground">online</div>
                </div>
              </div>
              
              <div className="mb-4 md:mb-6">
                <div className="bg-muted/50 rounded-xl md:rounded-2xl p-3 md:p-4 max-w-xs ml-auto">
                  <div className="text-xs md:text-sm text-foreground leading-relaxed">
                    أود حجز موعد غداً الساعة ٤ مساءً مع الدكتور أحمد
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/20 rounded-full flex-shrink-0" />
                <div className="bg-primary/10 border border-primary/20 rounded-xl md:rounded-2xl p-2 md:p-3 flex-1">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-bounce [animation-delay:0.1s]" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThreeBenefits />
      <PricingTeaser />
      <Testimonials />

      <section className="bg-primary px-4 md:px-6 py-12 md:py-16 mt-24 md:mt-32 rounded-lg shadow-glow mx-6 -mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
            Ready to save 20+ hours per week?
          </h2>
          <p className="text-primary-foreground/90 mb-6 md:mb-10 text-base md:text-lg">
            Join Oman clinics who trust Wisal AI Receptionist to handle WhatsApp overload.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6">
            <Button variant="primary" size="lg" onClick={() => setShowDemoModal(true)} className="w-full sm:w-auto">
              Book WhatsApp Demo
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-primary-foreground border-primary-foreground">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
