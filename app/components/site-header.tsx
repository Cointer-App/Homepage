import { Link } from "react-router";
import { MoonIcon, SunIcon } from "lucide-react";

import { Logo } from "~/components/logo";
import { useTheme } from "~/components/theme-provider";
import { Button } from "~/components/ui/button";
import { APP_URL, GITHUB_ORG } from "~/lib/site";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </Button>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-12 w-full max-w-4xl items-center gap-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="size-5" />
          <span className="text-sm font-semibold tracking-tight">Cointer</span>
        </Link>
        <nav className="ml-auto flex items-center gap-1 text-xs">
          <Button variant="ghost" render={<Link to="/docs" />}>
            Docs
          </Button>
          <Button variant="ghost" render={<Link to="/donate" />}>
            Donate
          </Button>
          <Button variant="ghost" render={<Link to="/contact" />} className="hidden sm:inline-flex">
            Contact
          </Button>
          <Button
            variant="ghost"
            render={<a href={GITHUB_ORG} target="_blank" rel="noreferrer" />}
            className="hidden sm:inline-flex"
          >
            GitHub
          </Button>
          <ThemeToggle />
          <Button render={<a href={APP_URL} />}>Open app</Button>
        </nav>
      </div>
    </header>
  );
}
