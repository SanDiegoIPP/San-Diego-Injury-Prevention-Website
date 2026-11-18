import Image from "next/image";
import Link from "next/link";

import { FadeUp } from "@/components/ui/fade-up";

const coachingGoals = [
  "Finding simple ways to eat healthier",
  "Building upper-body strength for everyday tasks like carrying groceries",
  "Making walks or other activities you enjoy part of your routine",
  "Finding more ways to stay connected with friends or your community",
];

export default function PopUpAnnouncements() {
  return (
    <section
      aria-labelledby="wellness-coaching-title"
      className="bg-[#F7F8FA] px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <FadeUp>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E2231A]">
              Free online wellness coaching
            </p>
            <h2
              id="wellness-coaching-title"
              className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight text-[#1B2A53] md:text-5xl"
            >
              Free Wellness Coaching for Adults and Seniors
            </h2>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-[#26334D]">
              Want to eat healthier, build upper-body strength, or get into a regular walking routine? Meet one-on-one with a trained volunteer coach who will help you choose a goal, work through what&apos;s getting in the way, and find a first step that fits your life.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-[#1B2A53]">
              Some goals you might work on
            </h3>
            <ul className="mb-8 space-y-3" aria-label="Possible wellness coaching goals">
              {coachingGoals.map((goal) => (
                <li key={goal} className="flex items-start gap-3 text-base leading-relaxed text-[#26334D]">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#E2231A]" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 grid gap-5 border-y border-[#D8DDE7] py-5 sm:grid-cols-2">
              <div>
                <h3 className="mb-1 font-heading text-sm font-bold uppercase tracking-wider text-[#E2231A]">
                  Cost and format
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#1B2A53]">
                  Free of charge, online, and one-on-one
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-heading text-sm font-bold uppercase tracking-wider text-[#E2231A]">
                  Course details
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#1B2A53]">
                  8 weeks, 30 minutes each week
                </p>
              </div>
            </div>

            <p className="mb-6 text-base leading-relaxed text-[#26334D]">
              You can come with a goal in mind or figure one out in your first session.
            </p>

            <p className="mb-3 text-base leading-relaxed text-[#26334D]">
              Interested? Visit our{" "}
              <Link
                href="https://forms.gle/BcQxDxtLfMTMQH9Z9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#E2231A] underline underline-offset-4"
              >
                Google Form
              </Link>
              . We&apos;ll share scheduling details and what to expect after you sign up.
            </p>

            <p className="mb-5 text-base leading-relaxed text-[#26334D]">
              Questions? Contact{" "}
              <a
                href="mailto:wellnesscoach@calipp.org"
                className="font-bold text-[#1B2A53] underline underline-offset-4"
              >
                wellnesscoach@calipp.org
              </a>
            </p>

            <p className="text-sm leading-relaxed text-[#26334D]">
              Coaching provides encouragement and help with goal setting. Volunteers do not provide medical advice or prescribe diets or exercises.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xl overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/Wellness Coaching Flyer.webp"
              alt="Flyer for free wellness coaching for adults and seniors"
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
