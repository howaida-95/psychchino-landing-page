import Link from "next/link";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#therapists", label: "Therapists" },
  { href: "#stories", label: "Stories" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-sage sm:text-2xl"
        >
          Mindpark
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full border border-sage/25 bg-white/60 px-4 py-2 text-sm font-semibold text-sage shadow-sm transition-colors hover:border-sage/40 hover:bg-white sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="#contact"
            className="inline-flex rounded-full bg-sage px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sage/20 transition-colors hover:bg-sage-dark"
          >
            Book intro call
          </Link>
        </div>
      </div>
    </header>
  );
}
