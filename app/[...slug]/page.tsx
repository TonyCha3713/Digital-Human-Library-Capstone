import { notFound } from "next/navigation";
import Image from "next/image";
import { Button, Card, Input } from "@/components/ui";
import { audienceServices, serviceRoutes, stats, testimonials } from "@/lib/site-data";

const genericPages: Record<
  string,
  {
    title: string;
    intro: string;
    heroImage: string;
    sections: { heading: string; body: string; image: string }[];
  }
> = {
  "about-us": {
    title: "IT'S TIME TO KNOW US - MEET OUR TEAM",
    intro:
      "Digital Human Library is built around human connection, community learning, and the belief that every learner deserves meaningful access to the world.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "Our Mission",
        body: "We create virtual experiential learning opportunities that connect people, places, and ideas across communities.",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "Meet Our Team",
        body: "Structured team section ready for photos, roles, and bios from your current dHL site.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "contact-us": {
    title: "COME VISIT",
    intro: "Reach out to connect with the dHL team, partner opportunities, and support.",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "HEADQUARTERS",
        body: "77 Kittridge Ave. E., Strathroy, ON., Canada, N7G 2A9",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "CONTACTS",
        body: "joinus@digitalhumanlibrary.com",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "our-impact-research": {
    title: "OUR IMPACT + SOCIAL IMPACT",
    intro:
      "Evidence-driven outcomes, real classroom transformation, and community-wide educational value.",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "Impact Statistics",
        body: "Data blocks and trend stories can be expanded as finalized research content is provided.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "Community Outcomes",
        body: "Space for case studies, student voice, educator outcomes, and research summaries.",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "getting-started": {
    title: "GETTING STARTED",
    intro:
      "A practical onboarding experience for educators and institutions new to virtual experiential learning.",
    heroImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "Experiential Learning",
        body: "How dHL programs work and how to integrate them into learning outcomes.",
        image:
          "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "FAQs for Teachers",
        body: "Common questions around scheduling, delivery, classroom setup, and support.",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "experiential-learning": {
    title: "EXPERIENTIAL LEARNING",
    intro:
      "Understand how relationship-centered virtual programming creates memorable and measurable learning experiences.",
    heroImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "How It Works",
        body: "A guided flow from discovery to booking, preparation, and session follow-up.",
        image:
          "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "Best Practices",
        body: "Readiness checklist, engagement methods, and implementation supports.",
        image:
          "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "faqs-for-teachers": {
    title: "FAQs FOR TEACHERS",
    intro: "Answers to common questions for easy implementation in classrooms.",
    heroImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "Booking & Planning",
        body: "Timeline, requirements, and recommendations.",
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "Accessibility",
        body: "Inclusive options and support guidance.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "sponsor-a-school": {
    title: "SPONSOR A SCHOOL",
    intro:
      "Help more learners access life-changing educational experiences through mission-aligned sponsorship.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "Why Sponsorship Matters",
        body: "Support equitable access to global learning.",
        image:
          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "Who Benefits",
        body: "Students, educators, communities, and future leaders.",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "apply-for-partnership": {
    title: "APPLY FOR PARTNERSHIP",
    intro:
      "Join dHL as a strategic partner and help scale impactful experiential learning opportunities.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "Partnership Fit",
        body: "Ideal partner profiles and collaboration pathways.",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "Application Process",
        body: "Simple multi-step process with clear milestones.",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  pricing: {
    title: "PRICING (DRAFT)",
    intro: "Pricing is currently undecided. This page is ready for approved packages later.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "Draft Status",
        body: "Hidden or staged release until finalized content is approved.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        heading: "Future Layout",
        body: "Prepared for tier cards, features, and comparison table.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
};

function AudiencePage({
  audience,
  title,
  intro,
}: {
  audience: "k-12" | "higher-education" | "public-libraries";
  title: string;
  intro: string;
}) {
  const serviceImageByTitle: Record<string, string> = {
    "Virtual Classrooms":
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
    "Virtual Tours & VR":
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80",
    "Implementation Services":
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    "Higher Education Learning Services":
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
    "B.Ed Learning Services":
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    "Public Library Learning Services":
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
  };

  return (
    <section className="section-shell">
      <Card className="mb-8">
        <p className="text-xs font-bold tracking-[0.22em] text-[var(--dark-blue)]">IT&apos;S TIME FOR ACTION</p>
        <h1 className="mt-2 text-4xl text-[var(--ink)] md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-[var(--muted)]">{intro}</p>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        {audienceServices[audience].map((service) => (
          <Card key={service.title}>
            <Image
              alt={service.title}
              className="mb-4 h-40 w-full rounded-xl object-cover"
              height={320}
              src={serviceImageByTitle[service.title]}
              width={600}
            />
            <h2 className="text-2xl text-[var(--dark-blue)]">{service.title}</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{service.copy}</p>
            <Button className="mt-5" href={service.href}>
              LEARN MORE
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ServiceTemplate({ slug }: { slug: string }) {
  const title = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  const templateImageBySection: Record<string, string> = {
    "Key Benefits":
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
    "How It Works":
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=80",
    "Audience Fit":
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    "Related Services":
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  };

  return (
    <section className="section-shell">
      <Card>
        <p className="text-xs font-bold tracking-[0.22em] text-[var(--dark-blue)]">SERVICE TEMPLATE</p>
        <h1 className="mt-2 text-4xl text-[var(--ink)] md:text-5xl">{title}</h1>
        <p className="mt-4 text-[var(--muted)]">
          Reusable structure for service content injection later (hero, intro, key benefits, how it
          works, audience fit, CTA, and related services).
        </p>
      </Card>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {["Key Benefits", "How It Works", "Audience Fit", "Related Services"].map((item) => (
          <Card key={item}>
            <Image
              alt={item}
              className="mb-4 h-36 w-full rounded-xl object-cover"
              height={300}
              src={templateImageBySection[item]}
              width={600}
            />
            <h2 className="text-2xl text-[var(--dark-blue)]">{item}</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Structured content block prepared for final CMS copy and media assignment.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join("/");

  if (path === "k-12") {
    return (
      <AudiencePage
        audience="k-12"
        intro="K-12 pathways are designed to make global learning personal, interactive, and curriculum-connected."
        title="K-12"
      />
    );
  }

  if (path === "higher-education") {
    return (
      <AudiencePage
        audience="higher-education"
        intro="Higher education experiences connect students with real expertise, current issues, and practical insight."
        title="Higher Education"
      />
    );
  }

  if (path === "public-libraries") {
    return (
      <AudiencePage
        audience="public-libraries"
        intro="Public library programs foster inclusive, intergenerational learning with high community relevance."
        title="Public Libraries"
      />
    );
  }

  if (path.startsWith("services/")) {
    const serviceSlug = path.replace("services/", "");
    if (!serviceRoutes.includes(serviceSlug as (typeof serviceRoutes)[number])) {
      notFound();
    }
    return <ServiceTemplate slug={serviceSlug} />;
  }

  const page = genericPages[path];
  if (!page) {
    notFound();
  }

  return (
    <section className="section-shell">
      <Card>
        <Image
          alt={page.title}
          className="mb-4 h-56 w-full rounded-xl object-cover md:h-72"
          height={700}
          src={page.heroImage}
          width={1400}
        />
        <h1 className="text-4xl text-[var(--ink)] md:text-5xl">{page.title}</h1>
        <p className="mt-4 max-w-3xl text-[var(--muted)]">{page.intro}</p>
      </Card>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {page.sections.map((section) => (
          <Card key={section.heading}>
            <Image
              alt={section.heading}
              className="mb-4 h-40 w-full rounded-xl object-cover"
              height={350}
              src={section.image}
              width={700}
            />
            <h2 className="text-2xl text-[var(--dark-blue)]">{section.heading}</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{section.body}</p>
          </Card>
        ))}
      </div>

      {path === "contact-us" && (
        <Card className="mt-8">
          <h2 className="text-2xl text-[var(--dark-blue)]">Send a Message</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Input placeholder="Full name" />
            <Input placeholder="Email address" type="email" />
          </div>
          <div className="mt-3">
            <textarea
              className="focus-ring min-h-28 w-full rounded-2xl border border-[var(--grey)] bg-white p-4 text-sm text-[var(--ink)]"
              placeholder="How can we help?"
            />
          </div>
          <Button className="mt-4">Submit</Button>
        </Card>
      )}

      {path === "our-impact-research" && (
        <>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <Card className="text-center" key={stat.label}>
                <p className="text-4xl font-bold text-[var(--orange)]">{stat.value}</p>
                <p className="mt-1 text-sm uppercase tracking-wide text-[var(--muted)]">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <p className="text-[var(--ink)]">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold text-[var(--dark-blue)]">{item.name}</p>
              </Card>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
