import Link from "next/link";
import Seo from "../../components/Seo";

const posts = [
  {
    slug: "whatsapp-ai-receptionist-oman",
    title: "The WhatsApp Crisis: Why Oman Clinics Need AI Receptionists",
    excerpt: "Learn why solo clinics in Oman struggle managing WhatsApp and how AI receptionists can save hours every day.",
    date: "2025-11-01",
    readTime: "3 min",
  },
];

export default function BlogList() {
  return (
    <>
      <Seo
        title="Blog - Wisal AI Receptionist Insights"
        description="Clinic automation insights, WhatsApp strategies, and AI receptionist best practices for Oman and GCC clinics."
        keywords="WhatsApp clinic automation, Oman healthcare AI, Arabic AI receptionist"
      />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-center mb-16 text-foreground">
            Clinic Automation Insights for Oman & GCC
          </h1>
        </div>
        <div className="max-w-3xl mx-auto space-y-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border border-border rounded-3xl bg-card hover:shadow-glow transition-shadow"
            >
              <h2 className="text-3xl font-semibold text-primary mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
