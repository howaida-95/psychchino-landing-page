const items = [
  {
    title: "Individual therapy",
    body: "One-on-one sessions tailored to anxiety, depression, burnout, trauma recovery, and life transitions.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Couples & relationships",
    body: "Rebuild trust, improve communication, and navigate conflict with structured, compassionate guidance.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "Family & teens",
    body: "Support for adolescents and families—school stress, identity, parenting skills, and healthy boundaries.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-cream-dark bg-white/50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Care that meets you where you are
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every plan is collaborative. We use proven modalities—CBT, ACT, EMDR,
            and more—always adapted to your goals.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="group flex flex-col rounded-2xl border border-cream-dark bg-background p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/15 text-sage transition-colors group-hover:bg-sage/25">
                {item.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 flex-1 text-muted leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
