import { PageShell } from "~/components/page-shell";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <div className="mx-auto w-full max-w-2xl px-4 py-10">
        <div className="legal-content text-sm/relaxed">
          <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1 text-xs text-muted-foreground">Last updated: {updated}</p>
          {children}
        </div>
      </div>
    </PageShell>
  );
}
