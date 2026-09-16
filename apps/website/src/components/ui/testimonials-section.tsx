"use client";

import { FadeUp } from "@/components/ui/fade-up";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  message: string;
  sender: string;
}

const testimonials: Testimonial[] = [
  {
    message: "[SDIPP] was very helpful. We can't have enough of these programs!",
    sender: "Sabine Bradshaw",
  },
  {
    message:
      "It was a wonderful demonstration and explanation on what to do when you're falling down to feel safe and know what to do.",
    sender: "Sonia Sirlin",
  },
  {
    message:
      "I especially enjoyed the stretching exercises. The breathing exercises were also very helpful. I'll definitely be back.",
    sender: "Karen Morse",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#729ab8]">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
              Testimonials
            </h2>
            <p className="text-white/80 text-lg md:text-xl">
              Reviews from our Fall Prevention Class attendees at Chateau Retirement Living Community:
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeUp key={index} delay={0.2 + index * 0.1}>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                  <blockquote className="text-white text-lg leading-relaxed mb-6 flex-1">
                    "{testimonial.message}"
                  </blockquote>
                  <p className="text-white/90 font-semibold text-base">
                    — {testimonial.sender}
                  </p>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
