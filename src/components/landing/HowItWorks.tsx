const steps = [
  {
    step: "01",
    title: "Tell us what you need",
    body: "Share your preferences—focus area, schedule, in-person or video—in a short, confidential form.",
  },
  {
    step: "02",
    title: "Get matched thoughtfully",
    body: "Our clinical team reviews fit so you are not scrolling endless profiles alone.",
  },
  {
    step: "03",
    title: "Begin with clarity",
    body: "Start with an intro call or first session. Adjust pace and modality anytime.",
  },
];

export function HowItWorks() {
  return (
    <section id="approach" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A gentle path into therapy
            </h2>
            <p className="mt-4 text-lg text-muted">
              No pressure, no jargon—just transparent next steps from your first
              message to your first session.
            </p>
          </div>
        </div>
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((item, i) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-cream-dark bg-white/70 p-8 pt-12 shadow-sm"
            >
              <span className="absolute left-8 top-6 font-serif text-4xl font-semibold text-sage/35">
                {item.step}
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{item.body}</p>
              {i < steps.length - 1 ? (
                <span
                  className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-cream-dark md:block"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
