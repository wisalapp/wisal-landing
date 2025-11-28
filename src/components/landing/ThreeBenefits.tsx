import { Clock, Globe, Users } from "lucide-react";

export default function ThreeBenefits() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-center text-3xl md:text-4xl font-display font-bold mb-12 text-foreground">
        Why Clinics Choose Wisal AI Receptionist
      </h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
        <div className="space-y-4">
          <div className="mx-auto w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Clock className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Always Available</h3>
          <p className="text-muted-foreground max-w-xs mx-auto">
            Wisal works 24/7, responding instantly so your patients never wait.
          </p>
        </div>
        <div className="space-y-4">
          <div className="mx-auto w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
            <Globe className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Arabic-First Support</h3>
          <p className="text-muted-foreground max-w-xs mx-auto">
            Understands local dialects and medical terms to communicate naturally with your patients.
          </p>
        </div>
        <div className="space-y-4">
          <div className="mx-auto w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent">
            <Users className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Frees Your Staff</h3>
          <p className="text-muted-foreground max-w-xs mx-auto">
            Automates repetitive messaging allowing receptionists to focus on meaningful patient care.
          </p>
        </div>
      </div>
    </section>
  );
}
