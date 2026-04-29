const people = [
  {
    name: "Dr. Elena Marquez",
    role: "Clinical psychologist · Anxiety & trauma",
    initials: "EM",
  },
  {
    name: "James Okonkwo, LCSW",
    role: "Therapist · Couples & communication",
    initials: "JO",
  },
  {
    name: "Dr. Priya Nair",
    role: "Psychologist · Mood & burnout",
    initials: "PN",
  },
];

export function Therapists() {
  return (
    <section
      id="therapists"
      className="border-t border-cream-dark bg-sage/[0.06] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Therapists who lead with warmth
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every Mindpark clinician is licensed, supervised, and committed to
            culturally responsive care.
          </p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li
              key={person.name}
              className="overflow-hidden rounded-2xl border border-cream-dark bg-background shadow-sm"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-sage/20 via-background to-accent/10">
                <span
                  className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-white/90 font-serif text-2xl font-semibold text-sage shadow-md"
                  aria-hidden
                >
                  {person.initials}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="mt-1 text-sm text-muted">{person.role}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex text-sm font-semibold text-sage underline-offset-4 hover:underline"
                >
                  Request availability
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
