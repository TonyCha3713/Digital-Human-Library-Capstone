import Link from "next/link";
import Image from "next/image";
import { Button, Card, Input } from "@/components/ui";
import { stats, testimonials } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="section-shell pt-12 md:pt-20">
        <div className="dhl-card grid gap-8 overflow-hidden p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--dark-blue)]">WELCOME TO</p>
            <h1 className="mt-3 text-4xl leading-tight text-[var(--ink)] md:text-6xl">
              DIGITAL HUMAN LIBRARY
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
              North America&apos;s premier virtual experience learning library. Experience new
              people, places and ideas from around the world.
            </p>
            <div className="mt-8">
              <Button href="#learning-communities">LEARN MORE</Button>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/30">
            <Image
              alt="Students learning through a digital session"
              className="h-full w-full object-cover"
              height={700}
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80"
              width={1200}
            />
          </div>
        </div>
      </section>

      <section className="section-shell" id="learning-communities">
        <h2 className="text-3xl text-[var(--dark-blue)]">LICENSE TO LIVE - OUR LEARNING COMMUNITIES</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [
              "K-12",
              "/k-12",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
            ],
            [
              "Higher Education",
              "/higher-education",
              "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80",
            ],
            [
              "Public Libraries",
              "/public-libraries",
              "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
            ],
          ].map(([label, href]) => (
            <Card className="relative overflow-hidden" key={label}>
              <Image
                alt={`${label} community`}
                className="mb-4 h-36 w-full rounded-xl object-cover"
                height={300}
                src={href === "/k-12"
                  ? "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
                  : href === "/higher-education"
                    ? "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80"
                    : "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80"}
                width={600}
              />
              <h3 className="text-xl text-[var(--ink)]">{label}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Explore tailored virtual experience pathways and services.
              </p>
              <Button className="mt-5" href={href}>
                LEARN MORE
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {[
        [
          "A PLACE TO BE - K-12",
          "/k-12",
          "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=1400&q=80",
        ],
        [
          "IN LOVE WITH BALI - HIGHER EDUCATION",
          "/higher-education",
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80",
        ],
        [
          "PUBLIC LIBRARIES",
          "/public-libraries",
          "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1400&q=80",
        ],
      ].map(([title, href], index) => (
        <section className="section-shell py-10" key={title}>
          <div
            className={`grid items-center gap-8 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="dhl-card min-h-72 p-5">
              <Image
                alt={String(title)}
                className="h-full min-h-64 w-full rounded-xl object-cover"
                height={700}
                src={
                  href === "/k-12"
                    ? "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=1400&q=80"
                    : href === "/higher-education"
                      ? "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80"
                      : "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1400&q=80"
                }
                width={1200}
              />
            </div>
            <div>
              <h2 className="text-3xl text-[var(--dark-blue)]">{title}</h2>
              <p className="mt-4 text-[var(--muted)]">
                This feature section is now populated with real stock imagery and is ready for your
                final dHL copy update.
              </p>
              <Button className="mt-6" href={href}>
                LEARN MORE
              </Button>
            </div>
          </div>
        </section>
      ))}

      <section className="section-shell">
        <h2 className="text-center text-3xl text-[var(--dark-blue)]">OUR IMPACT</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <Card className="text-center" key={stat.label}>
              <p className="text-4xl font-bold text-[var(--orange)] md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-[var(--muted)]">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="text-center text-3xl text-[var(--dark-blue)]">WHAT THEY SAY ABOUT US</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-[var(--ink)]">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-[var(--dark-blue)]">{item.name}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="text-3xl text-[var(--dark-blue)]">FOLLOW US ON INSTAGRAM - WAYS TO GET INVOLVED</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "START YOUR LEARNING JOURNEY",
              "/#learning-communities",
              "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80",
            ],
            [
              "BECOME AN EXPERT",
              "/apply-for-partnership",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
            ],
            [
              "SPONSOR A SCHOOL",
              "/sponsor-a-school",
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
            ],
            [
              "VOLUNTEER",
              "/contact-us",
              "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80",
            ],
          ].map(([title, href]) => (
            <Card key={title}>
              <Image
                alt={String(title)}
                className="mb-4 h-28 w-full rounded-xl object-cover"
                height={250}
                src={
                  href === "/#learning-communities"
                    ? "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80"
                    : href === "/apply-for-partnership"
                      ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                      : href === "/sponsor-a-school"
                        ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
                        : "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80"
                }
                width={600}
              />
              <h3 className="text-sm font-semibold text-[var(--ink)]">{title}</h3>
              <Link className="mt-4 inline-block text-sm font-semibold text-[var(--dark-blue)]" href={href}>
                View Pathway
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-8">
        <Card className="bg-[var(--dark-blue)] text-white">
          <h2 className="text-3xl text-white">SUBSCRIBE</h2>
          <p className="mt-2 max-w-3xl text-sm text-blue-100">
            Subscribe to our blog and always be the first to hear about new experts and virtual
            content, events, and adventures at Digital Human Library.
          </p>
          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <div className="w-full md:max-w-md">
              <Input placeholder="Enter your email" type="email" />
            </div>
            <Button variant="secondary">Subscribe</Button>
          </div>
        </Card>
      </section>
    </>
  );
}
