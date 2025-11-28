import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    quote: "Wisal transformed our WhatsApp chaos into organized efficiency. Our receptionist now spends 70% less time on messaging.",
    clinic: "Muscat Dental Clinic",
    location: "Muscat, Oman",
    rating: 5,
  },
  {
    quote: "The Arabic support is flawless. Patients feel like they're talking to a real receptionist, not a bot.",
    clinic: "Al Khuwair Medical Center", 
    location: "Muscat, Oman",
    rating: 5,
  },
  {
    quote: "Appointment booking accuracy is perfect. Zero missed appointments since we started using Wisal.",
    clinic: "Salalah Health Clinic",
    location: "Salalah, Oman",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-24 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
          Clinics Love Wisal
        </h2>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          Early pilot clinics across Oman sharing their experience
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="flex items-center mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            
            <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonial.clinic}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
