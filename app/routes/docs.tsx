import { marked } from "marked";

import type { Route } from "./+types/docs";
import { PageShell } from "~/components/page-shell";

export function meta() {
  return [
    { title: "Docs - Cointer" },
    {
      name: "description",
      content: "How to use the Cointer API.",
    },
  ];
}

const DOCS_SOURCE = "https://raw.githubusercontent.com/Cointer-App/Backend/main/API.md";
const CACHE_TTL_MS = 5 * 60 * 1000;

let cache: { html: string; fetchedAt: number } | null = null;

export async function loader() {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return { html: cache.html, error: false };
  }

  try {
    const res = await fetch(DOCS_SOURCE, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
    const markdown = await res.text();
    const html = await marked.parse(markdown, { gfm: true });
    cache = { html, fetchedAt: Date.now() };
    return { html, error: false };
  } catch {
    if (cache) return { html: cache.html, error: false };
    return { html: "", error: true };
  }
}

export default function Docs({ loaderData }: Route.ComponentProps) {
  const { html, error } = loaderData;

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-3xl px-4 py-10">
        <h1 className="text-xl font-semibold tracking-tight">Documentation</h1>
        {error ? (
          <div className="mt-8 rounded-xl border bg-card p-5 text-sm text-muted-foreground">
            Couldn't load the docs right now. Try again in a minute, or read{" "}
            <a
              href="https://github.com/Cointer-App/Backend/blob/main/API.md"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              API.md on GitHub
            </a>
            .
          </div>
        ) : (
          <div
            className="docs-content mt-6 text-sm/relaxed"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </PageShell>
  );
}
