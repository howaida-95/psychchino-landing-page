const quotes = [
  {
    text: "The intake felt human, not clinical. I was paired with someone who actually gets my background.",
    name: "Alex T.",
    detail: "Individual therapy",
  },
  {
    text: "We tried two therapists before Mindpark. Here, the process felt organized and kind.",
    name: "Sam & Riley",
    detail: "Couples counseling",
  },
  {
    text: "My teen opens up more in video sessions than they ever did in school counseling.",
    name: "Morgan K.",
    detail: "Family support",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Stories from our community
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Privacy matters. Names and details are adjusted to protect confidentiality.
        </p>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <li
              key={q.name}
              className="flex flex-col rounded-2xl border border-cream-dark bg-white/80 p-8 shadow-sm"
            >
              <p className="font-serif text-lg leading-relaxed text-foreground">“{q.text}”</p>
              <div className="mt-6 border-t border-cream-dark pt-6">
                <p className="font-semibold text-foreground">{q.name}</p>
                <p className="text-sm text-muted">{q.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
