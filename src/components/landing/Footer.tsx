import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#therapists", label: "Therapists" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-white/40 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-xl font-semibold text-sage">Mindpark</p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Mental health care designed around clarity, consent, and continuity.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-muted hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-muted sm:text-left">
        © {new Date().getFullYear()} Mindpark. Concept landing page—inspired by wellness studio
        aesthetics. Not a substitute for emergency care; if you are in crisis, contact local
        emergency services.
      </p>
    </footer>
  );
}
