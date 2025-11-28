import { useRouter } from "next/router";
import Link from "next/link";
import Seo from "../../components/Seo";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  if (slug !== "whatsapp-ai-receptionist-oman") {
    return (
      <>
        <Seo title="Blog Post Not Found - Wisal" />
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold text-center mb-6">Post Not Found</h1>
          <p className="text-muted-foreground text-center">
            Sorry, we could not find the blog post you were looking for.
          </p>
          <div className="text-center mt-12">
            <Link href="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo
        title="The WhatsApp Crisis: Why Oman Clinics Need AI Receptionists - Wisal"
        description="Managing patient communication on WhatsApp is overwhelming solo clinics in Oman. Learn how Wisal AI solves this."
      />
      
      <article className="container mx-auto px-4 py-24 max-w-3xl prose prose-primary">
        <h1>The WhatsApp Crisis: Why Oman Clinics Need AI Receptionists</h1>
        <p className="text-muted-foreground mb-8">
          Published November 1, 2025 • 3 min read
        </p>
        <p>
          Managing patient communication on WhatsApp is overwhelming solo clinics
          in Oman. Hundreds of messages daily distract receptionists from
          providing quality care.
        </p>
        <p>
          Wisal's AI receptionist automates common queries and appointment
          bookings, letting staff focus on complex interactions. Clinics report
          saving over 20+ hours weekly with fewer missed appointments.
        </p>
        <p>
          Built for Arabic-first support and integrated seamlessly with your
          existing WhatsApp line, Wisal is the trusted solution for Oman and GCC
          clinics dealing with growing patient volumes.
        </p>
        <p>
          Ready to see Wisal in action?{" "}
          <Link href="/demo" className="text-primary hover:underline">
            Book a live WhatsApp demo
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="text-primary hover:underline">
            start your free trial today
          </Link>
          .
        </p>
      </article>
    </>
  );
}
