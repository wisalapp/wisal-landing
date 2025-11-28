import { Button } from "../components/ui/button";
import { Phone, MessageCircle, Play, Shield, Clock } from "lucide-react";
import { useState } from "react";
import Seo from "../components/Seo";

const Demo = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  return (
    <>
      <Seo
        title="WhatsApp Demo - See Wisal AI Receptionist Live"
        description="Live demo of Wisal AI receptionist handling Arabic patient messages, appointment booking, and smart escalation for Oman clinics."
        keywords="WhatsApp AI demo, Oman clinic demo, Arabic AI receptionist demo, live demo"
      />

      <div className="min-h-screen py-24">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
            Live WhatsApp Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            See Wisal handle real Arabic patient conversations in under 2 minutes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="group shadow-elegant hover:shadow-glow px-8 text-lg bg-green-500 hover:bg-green-600"
              size="lg" 
              onClick={() => setShowWhatsApp(true)}
            >
              <Phone className="w-5 h-5 mr-3" />
              Start Live Demo
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-lg">
              Watch Video Demo
            </Button>
          </div>
        </section>

        {/* Live Demo Preview */}
        {showWhatsApp && (
          <section className="container mx-auto px-4 mb-24">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-green-400/10 to-green-500/10 border-4 border-green-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-foreground">Your Clinic</div>
                      <div className="text-sm text-muted-foreground">typing...</div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowWhatsApp(false)}
                    className="text-foreground hover:bg-muted"
                  >
                    Close Demo
                  </Button>
                </div>

                {/* Demo Messages */}
                <div className="space-y-4 mb-8">
                  <div className="flex">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex-shrink-0 mr-3" />
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 max-w-xs">
                      <div className="text-sm text-foreground">
                        [translate:مرحباً، أود حجز موعد مع الدكتور أحمد غداً الساعة ٤]
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-2xl p-4 max-w-xs shadow-sm">
                      <div className="text-sm font-medium">✅ تم الحجز بنجاح</div>
                      <div className="text-xs mt-1">[translate:السبت ٢٨ نوفمبر • ٤:٠٠ م]</div>
                      <div className="text-xs opacity-90">[translate:د. أحمد الخروصي]</div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex-shrink-0 mr-3" />
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 max-w-xs">
                      <div className="text-sm text-foreground">
                        [translate:شكراً، سأحضر في الموعد]
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-border/50">
                  <p className="text-muted-foreground mb-4">✅ Real Arabic understanding • Direct calendar sync • Zero missed appointments</p>
                  <Button className="w-full bg-green-500 hover:bg-green-600" size="lg">
                    Get This For Your Clinic
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Grid */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "HIPAA/GDPR", desc: "Patient data encrypted at rest & transit" },
              { icon: Clock, title: "24/7 Coverage", desc: "Never miss a patient message again" },
              { icon: MessageCircle, title: "Arabic Native", desc: "Understands Omani dialects perfectly" },
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl border hover:shadow-glow transition-all bg-card">
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Demo;
