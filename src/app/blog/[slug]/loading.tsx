export default function BlogPostLoading() {
  return (
    <div className="min-h-full bg-background px-4 py-16 sm:px-6 lg:px-8" aria-busy="true" aria-label="Loading article">
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="h-4 w-24 rounded bg-cream-dark" />
        <div className="mt-8 h-4 w-32 rounded bg-cream-dark" />
        <div className="mt-4 h-10 max-w-xl rounded bg-cream-dark/80" />
        <div className="mt-3 h-10 max-w-lg rounded bg-cream-dark/80" />
        <div className="relative mt-8 aspect-[16/9] w-full rounded-2xl bg-cream-dark/50" />
        <div className="mt-10 space-y-4">
          <div className="h-4 w-full rounded bg-cream-dark/70" />
          <div className="h-4 w-full rounded bg-cream-dark/70" />
          <div className="h-4 w-11/12 rounded bg-cream-dark/70" />
          <div className="h-4 w-full rounded bg-cream-dark/70" />
          <div className="h-4 w-10/12 rounded bg-cream-dark/70" />
        </div>
      </div>
    </div>
  );
}
