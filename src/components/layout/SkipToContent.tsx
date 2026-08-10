export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-dark focus:text-stone-50 focus:ring-2 focus:ring-brand-terracotta focus:outline-none rounded-subtle text-sm font-medium"
    >
      Skip to main content
    </a>
  );
}
