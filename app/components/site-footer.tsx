import { Link } from "react-router";

import { Logo } from "~/components/logo";
import { GITHUB_ORG } from "~/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Logo className="size-4" />
          <span>Cointer</span>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <Link to="/docs" className="hover:text-foreground">
            Docs
          </Link>
          <Link to="/donate" className="hover:text-foreground">
            Donate
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link to="/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <a href={GITHUB_ORG} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
