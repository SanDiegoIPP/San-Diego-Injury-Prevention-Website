import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { FadeUp } from "@/components/ui/fade-up";
import PublicHealthFairSection from "@/components/ui/public-health-fair-section";

const CurveOverlay = dynamic(() => import("@/components/ui/curve-overlay"));
import AeroHero2 from "@/components/ui/aero-hero-2";
const HomeImpactSection = dynamic(() => import("@/components/ui/home-impact-section"));
const HomePresidentsTeaser = dynamic(() => import("@/components/ui/home-presidents-teaser"));
const TestimonialsSection = dynamic(() => import("@/components/ui/testimonials-section"));

export default function Home() {
  return (
    <div className="bg-white">
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <AeroHero2 />

      {/* ─── UPCOMING PUBLIC HEALTH FAIR ───────────────────────────────── */}
      <PublicHealthFairSection />

      {/* ─── INTRO SPLIT ───────────────────────── */}
      <section className="relative flex min-h-[600px] flex-col overflow-hidden bg-white md:flex-row">
        <div className="relative z-10 flex w-full items-center justify-center bg-[#E2231A] p-10 md:w-1/2 md:p-20">
          <CurveOverlay position="right" color="bg-white" className="hidden h-[150vw] w-full mix-blend-overlay opacity-20 md:block" />
          <div className="relative z-20 max-w-lg">
            <FadeUp delay={0.1}>
              <h2 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                San Diego&rsquo;s premier
                <br />
                student-run injury
                <br />
                prevention program.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mb-8 text-lg font-medium leading-relaxed text-white">
                We are a student-run 501(c)3 nonprofit organization centered at UC San Diego, dedicated to empowering our community through injury education, community outreach, and evidence-based programs.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 font-heading font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#E2231A]"
              >
                apply now
              </Link>
            </FadeUp>
          </div>
        </div>
        <div className="relative min-h-[400px] w-full md:min-h-full md:w-1/2">
          <Image
            src="/images/Fall Prevention Classes at Atria La Jolla/1.webp"
            alt="SDIPP community programs"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ─── MISSION SPLIT ─────────────────────────────── */}
      <section className="relative flex min-h-[600px] flex-col-reverse overflow-hidden bg-[#1B2A53] md:flex-row">
        <div className="relative min-h-[400px] w-full md:min-h-full md:w-1/2">
          <Image
            src="/images/volunteer training/vt5.webp"
            alt="SDIPP volunteers practice measuring vital signs with certified EMTs"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center bg-[#1B2A53] p-10 md:w-1/2 md:p-20">
          <CurveOverlay position="left" color="bg-white" className="hidden w-[150%] opacity-10 md:block" />
          <div className="relative z-20 max-w-lg">
            <FadeUp delay={0.1}>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white">Our Mission</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="mb-6 font-heading text-4xl font-bold uppercase leading-none tracking-wide text-white md:text-5xl lg:text-6xl">
                BUILDING A SAFER SAN DIEGO
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-lg font-medium leading-relaxed text-white">
                SDIPP is committed to reducing preventable injuries and promoting safer environments for individuals and families across the San Diego area. Through our various programs and initiatives, we aim to increase the use of evidence-based strategies for injury prevention in all areas, from adolescent sports to fall prevention classes at senior residential homes.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── IMPACT ───────────────────────────────── */}
      <div className="relative bg-white">
        <HomeImpactSection />
      </div>

      {/* ─── PRESIDENTS ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1B2A53] py-20">
        <HomePresidentsTeaser />
      </section>

      {/* ─── HOW TO JOIN SPLIT ──────────────────────────── */}
      <section className="relative flex min-h-[600px] flex-col overflow-hidden bg-white md:flex-row">
        <div className="z-10 flex w-full items-center justify-center bg-white p-10 md:w-1/2 md:p-20">
          <div className="relative z-20 max-w-lg">
            <FadeUp delay={0.1}>
              <h2 className="mb-6 font-heading text-4xl font-bold uppercase leading-none tracking-wide text-[#1B2A53] md:text-5xl lg:text-6xl">
                HOW TO VOLUNTEER
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <ul className="mb-8 space-y-4 text-lg font-medium text-[#1B2A53]">
                <li className="flex items-start gap-3"><span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-[#E2231A]" /><span>No membership fees ever.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-[#E2231A]" /><span>Members must be 18 years of age or older.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-[#E2231A]" /><span>No minimum or maximum volunteer shift requirement.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-[#E2231A]" /><span>Dedicated to community health and wellness.</span></li>
              </ul>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#E2231A] bg-[#E2231A] px-8 py-3 font-heading font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#E2231A]"
              >
                apply today
              </Link>
            </FadeUp>
          </div>
        </div>
        <div className="relative min-h-[400px] w-full md:min-h-full md:w-1/2">
          <Image
            src="/images/Organization Meetings/org1.webp"
            alt="SDIPP members at a general meeting"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────── */}
      <TestimonialsSection />
    </div>
  );
}
