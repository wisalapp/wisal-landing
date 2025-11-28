import { Button } from "../ui/button";
import { DollarSign, CalendarDays } from "lucide-react";
import { useState } from "react";

interface Plan {
  name: string;
  monthly: number;
  yearly: number;
  discount: string;
  popular?: boolean;
}

const plans: Plan[] = [
  { name: "Starter", monthly: 49, yearly: 39, discount: "20% off" },
  { name: "Pro", monthly: 99, yearly: 74, discount: "25% off", popular: true },
  { name: "Multi-Clinic", monthly: 199, yearly: 139, discount: "30% off" },
];

export default function PricingTeaser() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          Choose the plan that fits your clinic. Cancel anytime.
        </p>
      </div>

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
            Yearly ({plans[0].discount})
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`group relative bg-card border-2 rounded-3xl p-8 shadow-xl hover:shadow-glow hover:-translate-y-2 transition-all duration-500 ${
              plan.popular ? "border-primary/50 ring-2 ring-primary/20" : "border-border/50"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-xs font-bold shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <DollarSign className="w-8 h-8 text-primary mr-2" />
                  <span className="text-4xl font-display font-bold text-primary">
                    {isYearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-lg text-muted-foreground ml-1">/mo</span>
                </div>
              </div>
              
              <Button variant={plan.popular ? "primary" : "outline"} size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
