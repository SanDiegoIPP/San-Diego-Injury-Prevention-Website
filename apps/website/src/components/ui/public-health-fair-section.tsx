import Image from "next/image";

import { FadeUp } from "@/components/ui/fade-up";

const organizations = [
  "Volunteers in Medicine",
  "Asian Pacific Health Foundation",
  "Stop the Bleed",
  "Keeping the Beat",
];

export default function PublicHealthFairSection() {
  return (
    <section
      aria-labelledby="public-health-fair-title"
      className="bg-[#F7F8FA] px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <FadeUp>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E2231A]">
              Free community event
            </p>
            <h2
              id="public-health-fair-title"
              className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight text-[#1B2A53] md:text-5xl"
            >
              Join us at our upcoming Public Health Fair
            </h2>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[#26334D]">
              Check out our upcoming free Public Health fair that will bring together a handful of local San Diego organizations, health providers, and educators that will be providing their resources, education, and free screenings to the Mira Mesa community. Our fair will be focused on injury prevention awareness and education for the active youth and young adult population in San Diego, though this community fair welcomes guests of all ages and backgrounds!
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mb-8 grid gap-5 border-y border-[#D8DDE7] py-5 sm:grid-cols-2">
              <div>
                <h3 className="mb-1 font-heading text-sm font-bold uppercase tracking-wider text-[#E2231A]">
                  Where
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#1B2A53]">
                  Mira Mesa High School North Parking Lot
                  <br />
                  10510 Marauder Way, San Diego, CA 92126
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-heading text-sm font-bold uppercase tracking-wider text-[#E2231A]">
                  When
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#1B2A53]">
                  November 11th, 10am - 1pm
                </p>
              </div>
            </div>

            <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-[#1B2A53]">
              Organizations included
            </h3>
            <ul className="flex flex-wrap gap-2" aria-label="Participating organizations">
              {organizations.map((organization) => (
                <li
                  key={organization}
                  className="rounded-full border border-[#D8DDE7] bg-white px-4 py-2 text-sm font-medium text-[#1B2A53]"
                >
                  {organization}
                </li>
              ))}
              <li className="rounded-full bg-[#1B2A53] px-4 py-2 text-sm font-bold text-white">
                &amp; more!
              </li>
            </ul>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xl overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/final flyer.webp"
              alt="Flyer for the San Diego Public Health Fair"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
