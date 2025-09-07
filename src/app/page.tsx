'use client';
import React, { useState } from "react";

export default function SafeHavenLanding() {
  const [faqOpen, setFaqOpen] = useState<string | null>(null);
  const toggle = (id: string) => setFaqOpen(faqOpen === id ? null : id);

  // Netlify form submit -> then redirect to Calendly
  async function handleQuoteSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Netlify expects URL-encoded body
    const encoded = new URLSearchParams();
    data.forEach((value, key) => encoded.append(key, String(value)));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });
      window.location.href = "https://calendly.com/rhinck2520/30min"; // ← replace with your Calendly URL
    } catch (err) {
      alert("Sorry, something went wrong. Please try again.");
    }
  }

  const carriers = [
  { src: "/carriers/aig.png", alt: "AIG" },
  { src: "/carriers/MOO.png", alt: "Mutual of Omaha" },
  { src: "/carriers/prudential.png", alt: "Prudential" },
  { src: "/carriers/ethos.png", alt: "Ethos" },
  { src: "/carriers/americo.png", alt: "Americo" },
  { src: "/carriers/aetna.png", alt: "Aetna" },
  // add/remove as needed…
];


  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="SafeHaven Life Logo" className="h-20 w-auto max-h-24" />
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#faq" className="hover:underline">FAQ's</a>
            <a
              href="https://calendly.com/rhinck2520/30min"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border px-3 py-1.5 hover:bg-gray-50"
            >
              Book an appointment
            </a>
          </nav>
        </div>
      </header>

      {/* Hero (full-bleed background) */}
      <section className="relative overflow-hidden bg-[url('/hero.png')] bg-cover bg-center">
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl">
            Protect What Matters Most — Without the Hassle
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
            Book a free consultation today!
          </p>

          <div className="mt-8">
  <a
    href="#quote"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="inline-flex items-center justify-center rounded-xl bg-[#fac34c] px-6 py-3 font-semibold text-[#1a3b59] hover:brightness-110"
  >
    Start My Quote
  </a>
</div>


          {/* trust badges on dark */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-200">
            <Badge text="Licensed & Verified" />
            <Badge text="100% Confidential" />
            <Badge text="Plans Fit Any Budget" />
          </div>
        </div>
      </section>

{/* Carriers divider (no title) */}
<section aria-label="Carriers we work with" className="bg-[#1a3b59]">
  <div className="mx-auto max-w-6xl px-4 py-12 text-center">

    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
      {carriers.map((c) => (
        <img
          key={c.alt}
          src={c.src}
          alt={c.alt}
          className="h-10 w-auto opacity-90 brightness-0 invert"
        />
      ))}
    </div>
  </div>
</section>



      {/* Quote (contained card) */}
      <section id="quote" className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 overflow-hidden">
            <div className="border-b px-6 py-5">
              <h2 className="text-2xl font-semibold text-gray-900">Get Your Free Life Insurance Quote</h2>
              <p className="mt-1 text-gray-600">Simple coverage. Honest help. No nonsense.</p>
            </div>

            <form
              name="quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-2"
              onSubmit={handleQuoteSubmit}
            >
              {/* Netlify wiring */}
              <input type="hidden" name="form-name" value="quote" />
              <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>

              {/* Full Name */}
              <label className="flex flex-col gap-1 md:col-span-2">
                <span className="text-sm text-gray-700">Full Name</span>
                <input
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="rounded-lg border px-3 py-2"
                />
              </label>

              {/* Email */}
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-700">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="rounded-lg border px-3 py-2"
                />
              </label>

              {/* Phone */}
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-700">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="^[0-9\\-\\+\\(\\)\\s]{7,}$"
                  placeholder="(555) 555-5555"
                  className="rounded-lg border px-3 py-2"
                />
              </label>

              {/* Age Range */}
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-700">Select Age Range</span>
                <select name="ageRange" className="rounded-lg border px-3 py-2">
                  <option>18-29</option>
                  <option>30-39</option>
                  <option>40-49</option>
                  <option>50-59</option>
                  <option>60-69</option>
                  <option>70+</option>
                </select>
              </label>

              {/* Florida Resident */}
              <label className="flex flex-col gap-1">
                <span className="text-sm text-gray-700">Florida Resident?</span>
                <div className="flex gap-6">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="flResident" value="Yes" className="h-4 w-4" />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="flResident" value="No" className="h-4 w-4" />
                    <span>No</span>
                  </label>
                </div>
              </label>

              {/* Timeline */}
              <label className="flex flex-col gap-1 md:col-span-2">
                <span className="text-sm text-gray-700">When Do You Need Coverage?</span>
                <select name="timeline" className="rounded-lg border px-3 py-2">
                  <option>ASAP (Next 7 Days)</option>
                  <option>Within the Next 30 Days</option>
                  <option>1–3 Months</option>
                  <option>3–6 Months</option>
                  <option>Just Getting Information</option>
                </select>
              </label>

              {/* Privacy note */}
              <p className="md:col-span-2 text-sm text-gray-700">
                We respect your privacy. Only a licensed insurance professional may contact you to discuss your options.
              </p>

              {/* Single Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-[#1a3b59] px-5 py-3 text-white hover:brightness-110"
                >
                  Submit &amp; Book a Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials — 3 cards side by side */}
<section aria-label="Testimonials" className="bg-[#fac34c]">
  <div className="mx-auto max-w-6xl px-4 py-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1a3b59]">
      What other families are saying
    </h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <TestimonialCardLikeVet
        avatar="/t1.jpg"
        title="“At first I was denied coverage, but then…”"
        body="My experience with SafeHaven Life was great. I was denied elsewhere, but they worked until my family had the coverage we needed."
        name="Mary S."
        tag="Florida"
      />
      <TestimonialCardLikeVet
        avatar="/t2.jpg"
        title="“Half the price with more coverage”"
        body="I got new policies that were half the price with better coverage than I had before. Super easy process."
        name="James W."
        tag="Florida"
      />
      <TestimonialCardLikeVet
        avatar="/t3.jpg"
        title="“My premium dropped ~40%”"
        body="They reviewed my plan and got my premium down about 40% without losing coverage. Highly recommend."
        name="Carolyn M."
        tag="Florida"
      />
    </div>
  </div>
</section>


      {/* FAQ */}
      <section id="faq" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y rounded-2xl bg-white shadow">
            <FaqItem id="q1" question="Do I need to take a medical exam?" openId={faqOpen} onToggle={toggle}>
              Not always. Many people qualify without a medical exam. In some cases, it may be required based on age, health, or coverage amount.
            </FaqItem>
            <FaqItem id="q2" question="How much does life insurance cost?" openId={faqOpen} onToggle={toggle}>
              Costs vary. Rates are based on age, health, coverage, and policy type. Some plans start as low as $15/month.
            </FaqItem>
            <FaqItem id="q3" question="Is this real insurance?" openId={faqOpen} onToggle={toggle}>
              Yes. We work only with licensed agents and A-rated insurance carriers.
            </FaqItem>
            <FaqItem id="q4" question="How long does it take to get covered?" openId={faqOpen} onToggle={toggle}>
              Most people are approved the same day or within 48 hours.
            </FaqItem>
            <FaqItem id="q5" question="What if I already have a policy?" openId={faqOpen} onToggle={toggle}>
              We can review your current policy and help you find better rates or coverage.
            </FaqItem>
            <FaqItem id="q6" question="What happens after I submit the form?" openId={faqOpen} onToggle={toggle}>
              You’ll be redirected to book a free consultation where we’ll discuss tailored policy options.
            </FaqItem>
          </div>
          <div className="mt-8">
            <a
              href="https://calendly.com/rhinck2520/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#1a3b59] px-5 py-3 text-white hover:brightness-110"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SafeHaven Life. All rights reserved.</p>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <p className="mt-4 text-xs">This site is not a solicitation to sell insurance in any jurisdiction where the company or agents are not licensed.</p>
        </div>
      </footer>
    </div>
  );
}

/* ------- Reusable bits ------- */

function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-gray-50 text-gray-700">
      <span className="h-2 w-2 rounded-full bg-green-500" />
      <span>{text}</span>
    </div>
  );
}

function FaqItem({
  id,
  question,
  children,
  openId,
  onToggle,
}: {
  id: string;
  question: string;
  children: React.ReactNode;
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  const open = openId === id;
  return (
    <div className="p-4">
      <button
        className="flex w-full items-center justify-between text-left text-base font-medium"
        aria-expanded={open}
        onClick={() => onToggle(id)}
      >
        {question}
        <span className={`ml-4 transition-transform ${open ? "rotate-45" : "rotate-0"}`}>＋</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden text-gray-700">
          <p className="pt-3 text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCardLikeVet({
  avatar,
  title,
  body,
  name,
  tag,
}: {
  avatar: string;
  title: string;
  body: string;
  name: string;
  tag?: string;
}) {
  return (
    <figure className="rounded-2xl bg-[#1a3b59] p-8 md:p-10 shadow-lg ring-1 ring-white/10 text-center">
      <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/40">
        <img src={avatar} alt={`${name} headshot`} className="h-full w-full object-cover" />
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-white">
        {title}
      </h3>

      <blockquote className="mt-4 text-base md:text-lg text-blue-100">
        {body}
      </blockquote>

      {/* 5-star rating */}
      <div
        className="mt-4 flex items-center justify-center gap-1 text-[#fac34c]"
        aria-label="5 out of 5 stars"
      >
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.802-2.036a1 1 0 0 0-1.176 0l-2.802 2.036c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 0 0 .95-.69l1.07-3.292Z" />
          </svg>
        ))}
      </div>

      <figcaption className="mt-6 text-sm md:text-base text-blue-100/90">
        <span className="font-medium text-white">{name}</span>
        {tag ? <span className="ml-2 opacity-80">— {tag}</span> : null}
      </figcaption>
    </figure>
  );
}


