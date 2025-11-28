import { Button } from "../components/ui/button";
import { DollarSign, Users, MessageCircle, Shield, CalendarDays, CheckCircle } from "lucide-react";
import { useState } from "react";
import Seo from "../components/Seo";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [dailyMessages, setDailyMessages] = useState(200);

  const plans = [
    { name: "Starter", monthly: 49, yearly: 39, clinics: 1, messages: "5K", staff: "Owner" },
    { name: "Pro", monthly: 99, yearly: 74, clinics: "1-2", messages: "20K", staff: "Owner + 1", popular: true },
    { name: "Multi-Clinic", monthly: 199, yearly: 139, clinics: "3-5", messages: "Unlimited", staff: "Unlimited" },
  ];

  const monthlySavings = dailyMessages * 30 * 0.5 * 0.35;

  return (
    <>
      <Seo
        title="Pricing - Wisal WhatsApp AI for Oman Clinics"
        description="Transparent, affordable pricing for Wisal AI receptionist tailored for Oman clinics. Calculate your monthly savings and choose the right plan."
        keywords="WhatsApp AI pricing, Oman clinic pricing, healthcare automation pricing, Wisal pricing"
      />
      
      <div className="min-h-screen py-24">
        {/* Pricing Hero */}
        <section className="container mx-auto px-4 text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
            Transparent Pricing for Oman Clinics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            No hidden fees. Cancel anytime. Start with 14-day free trial.
          </p>

          {/* Savings Calculator */}
          <div className="bg-card border-2 border-muted rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-8">
              <DollarSign className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Your Monthly Savings</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Daily WhatsApp messages
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    value={dailyMessages}
                    onChange={(e) => setDailyMessages(Number(e.target.value))}
                    className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary-glow"
                  />
                  <span className="font-mono font-bold text-2xl text-primary">
                    {dailyMessages.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 text-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
                <div>
                  <div className="text-4xl font-display font-bold text-primary">{monthlySavings.toFixed(0)} OMR</div>
                  <div className="text-muted-foreground">Receptionist savings</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-secondary">{plans[1].yearly}</div>
                  <div className="text-muted-foreground">Wisal Pro (recommended)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Toggle & Cards */}
        <section className="container mx-auto px-4 mb-24">
          <div className="flex justify-center mb-16">
            <div className="bg-muted rounded-full p-1 flex shadow-elegant">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isYearly ? "bg-background text-foreground shadow-inner" : "text-muted-foreground"
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isYearly ? "bg-primary text-primary-foreground shadow-inner" : "text-muted-foreground"
                }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly (Save 25%)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={plan.name} className={`relative bg-card border-2 rounded-3xl p-8 shadow-xl hover:shadow-glow hover:-translate-y-3 transition-all group ${plan.popular ? "border-primary ring-4 ring-primary/10 scale-[1.02]" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-display font-bold text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <DollarSign className="w-8 h-8 text-primary" />
                    <span className="text-5xl font-display font-bold text-primary">
                      {isYearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-xl text-muted-foreground">/mo</span>
                  </div>
                  
                  <Button variant="primary" size="lg" className="w-full shadow-elegant hover:shadow-glow">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="container mx-auto px-4 mb-24">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-foreground">
            Everything you need, nothing you don't
          </h2>
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-6 font-semibold text-foreground">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className={`p-6 text-center font-semibold ${plan.popular ? "text-primary" : "text-foreground"}`}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Clinics", "1", "1-2", "3-5"],
                  ["Messages/mo", "5K", "20K", "Unlimited"],
                  ["Staff Access", "Owner", "Owner + 1", "Unlimited"],
                  ["Arabic AI", "✓", "✓", "✓"],
                  ["Appointment Booking", "✓", "✓", "✓"],
                  ["Analytics Dashboard", "Basic", "Full", "Advanced"],
                  ["Priority Support", "-", "✓", "2h SLA"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-border/50 hover:bg-muted/20">
                    <td className="p-6 font-medium text-foreground">{row[0]}</td>
                    {row.slice(1).map((feature, j) => {
                      const planIndex = j;
                      const isPopular = plans[planIndex]?.popular;
                      return (
                        <td key={j} className={`p-6 text-center ${isPopular ? "font-semibold text-primary" : ""}`}>
                          {feature === "✓" ? (
                            <CheckCircle className={`w-6 h-6 mx-auto ${isPopular ? "text-primary" : "text-secondary"}`} />
                          ) : feature}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Uses your existing WhatsApp Business number. No new numbers needed.",
              "Each clinic data completely isolated. Enterprise-grade security.",
              "AI confidence <80% automatically escalates to your staff with full context.",
              "14-day free trial, no credit card required. Cancel anytime.",
              "Native Arabic support + medical terminology understanding.",
              "Direct calendar integration. Conflict detection included.",
            ].map((faq, i) => (
              <div key={i} className="bg-card border p-8 rounded-2xl hover:shadow-glow transition-all">
                <p className="text-muted-foreground leading-relaxed">{faq}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
