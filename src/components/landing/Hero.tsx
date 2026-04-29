import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-sage/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Accepting new clients
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            A calmer mind starts with{" "}
            <span className="text-sage">the right therapist</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Mindpark matches you with licensed psychologists for individual,
            couples, and family therapy—online or in our peaceful studios.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-hover"
            >
              Schedule a free 15-minute call
            </Link>
            <Link
              href="#therapists"
              className="inline-flex items-center justify-center rounded-full border border-sage/30 bg-white/80 px-6 py-3.5 text-base font-semibold text-sage transition-colors hover:border-sage/50 hover:bg-white"
            >
              Meet our team
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-cream-dark pt-10 sm:max-w-lg">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                Clients supported
              </dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-foreground">
                12k+
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                Avg. response
              </dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-foreground">
                24h
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                Session formats
              </dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-foreground">
                3
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cream-dark bg-gradient-to-br from-white via-background to-cream-dark/40 shadow-xl shadow-sage/10">
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e2d26' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
              <div className="rounded-2xl border border-white/60 bg-white/90 p-5 shadow-lg backdrop-blur-sm">
                <p className="font-serif text-lg font-medium text-foreground">
                  “I finally feel heard—and I have tools that actually help.”
                </p>
                <p className="mt-3 text-sm text-muted">— Jordan, Mindpark client since 2024</p>
              </div>
            </div>
            <div
              className="absolute left-8 top-10 h-24 w-24 rounded-full bg-sage/20 blur-2xl"
              aria-hidden
            />
            <div
              className="absolute right-10 top-1/4 h-32 w-32 rounded-full border-4 border-sage/30"
              aria-hidden
            />
            <div
              className="absolute bottom-1/3 left-1/4 h-16 w-16 rounded-2xl bg-accent/30"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
