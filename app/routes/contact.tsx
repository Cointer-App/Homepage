import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";

import { PageShell } from "~/components/page-shell";
import { Button } from "~/components/ui/button";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { SUPPORT_EMAIL } from "~/lib/site";

export function meta() {
  return [
    { title: "Contact - Cointer" },
    {
      name: "description",
      content: "Get in touch with the Cointer team for support or business inquiries.",
    },
  ];
}

export default function Contact() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-2xl px-4 py-10">
        <h1 className="text-xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 text-sm/relaxed text-muted-foreground">One inbox for everything.</p>

        <div className="mt-6 rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2">
            <MailIcon className="size-4 shrink-0 text-muted-foreground" />
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="min-w-0 flex-1 truncate font-mono text-sm hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            <Button
              variant="outline"
              size="icon"
              aria-label="Copy email address"
              onClick={() => copy(SUPPORT_EMAIL)}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-4">
            <h2 className="text-sm font-medium">Support</h2>
            <p className="mt-1 text-xs/relaxed text-muted-foreground">
              Questions, bug reports, and feature requests. Tell us what broke or what you'd like
              Cointer to do.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <h2 className="text-sm font-medium">Business</h2>
            <p className="mt-1 text-xs/relaxed text-muted-foreground">
              Partnerships, press, legal, and anything else. Same address works for all of it.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
