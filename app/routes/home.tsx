import { Link } from "react-router";
import { ArrowRightIcon, BellIcon, KeyRoundIcon, SmartphoneIcon, WalletIcon } from "lucide-react";

import type { Route } from "./+types/home";
import { Logo } from "~/components/logo";
import { PageShell } from "~/components/page-shell";
import { Button } from "~/components/ui/button";
import { getChains, getWatchedWallets } from "~/lib/api";
import { APP_STORE_URL, APP_URL, FEATURES, PLAY_STORE_URL, REPOS } from "~/lib/site";

export function meta() {
  return [
    { title: "Cointer - Get notified when your wallets receive crypto" },
    {
      name: "description",
      content:
        "Cointer sends you a notification when your crypto addresses receive funds. No sign up, never touches your money, open source.",
    },
  ];
}

export async function loader() {
  const [watchedWallets, chains] = await Promise.all([getWatchedWallets(), getChains()]);
  return { watchedWallets, chains };
}

const STEPS = [
  {
    icon: KeyRoundIcon,
    title: "Create a key",
    description:
      "Tap once to get a personal key. That key is your account, so save it somewhere safe.",
  },
  {
    icon: WalletIcon,
    title: "Add addresses",
    description:
      "Paste in the addresses you want to watch. Cointer only reads public blockchain data, so your funds are never at risk.",
  },
  {
    icon: BellIcon,
    title: "Get notified",
    description:
      "When a deposit comes in, you get an alert on your phone, in Discord or Slack, through ntfy, or by email.",
  },
] as const;

export default function Home({ loaderData }: Route.ComponentProps) {
  const { watchedWallets, chains } = loaderData;

  return (
    <PageShell>
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 pt-20 pb-16 text-center">
        <Logo className="size-12" />
        <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Get notified when your wallets receive crypto
        </h1>
        <p className="max-w-md text-sm/relaxed text-muted-foreground">
          Add the addresses you want to watch and Cointer will send you a notification when they
          receive a deposit. No sign up, and it never touches your funds.
        </p>
        <div className="flex items-center gap-2">
          <Button size="lg" render={<a href={APP_URL} />}>
            Open the app
            <ArrowRightIcon />
          </Button>
          <Button size="lg" variant="outline" render={<Link to="/docs" />}>
            Read the docs
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            render={<a href={APP_STORE_URL} target="_blank" rel="noreferrer" />}
          >
            <SmartphoneIcon />
            App Store
          </Button>
          <Button
            size="sm"
            variant="ghost"
            render={<a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" />}
          >
            <SmartphoneIcon />
            Google Play
          </Button>
        </div>
        {watchedWallets !== null && (
          <p className="text-xs text-muted-foreground">
            <span className="font-mono font-medium text-foreground">
              {watchedWallets.toLocaleString()}
            </span>{" "}
            {watchedWallets === 1 ? "wallet" : "wallets"} being watched right now
          </p>
        )}
      </section>

      <section className="border-t bg-card/50">
        <div className="mx-auto grid w-full max-w-4xl gap-8 px-4 py-14 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.title} className="flex flex-col gap-2">
              <step.icon className="size-4 text-primary" />
              <h2 className="text-sm font-semibold tracking-tight">{step.title}</h2>
              <p className="text-xs/relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto w-full max-w-4xl px-4 py-14">
          <h2 className="text-lg font-semibold tracking-tight">Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-xl border bg-card p-4">
                <h3 className="text-sm font-medium">{feature.title}</h3>
                <p className="mt-1.5 text-xs/relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto w-full max-w-4xl px-4 py-14">
          <h2 className="text-lg font-semibold tracking-tight">Supported chains</h2>
          <p className="mt-1.5 max-w-md text-xs/relaxed text-muted-foreground">
            We add more chains over time.{" "}
            <Link to="/donate" className="text-primary hover:underline">
              Donations
            </Link>{" "}
            help speed that up.
          </p>
          {chains && chains.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {chains.map((chain) => (
                <div
                  key={chain.id}
                  className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2"
                >
                  <span className="text-xs font-medium">{chain.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{chain.asset}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-xs/relaxed text-muted-foreground">
              Couldn't load the list right now. Check the{" "}
              <Link to="/docs" className="text-primary hover:underline">
                docs
              </Link>{" "}
              for the current list.
            </p>
          )}
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto w-full max-w-4xl px-4 py-14">
          <h2 className="text-lg font-semibold tracking-tight">Open source</h2>
          <p className="mt-1.5 max-w-md text-xs/relaxed text-muted-foreground">
            All of Cointer's code is on GitHub.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border bg-card p-4 transition-colors hover:border-ring/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{repo.name}</h3>
                  <ArrowRightIcon className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1.5 text-xs/relaxed text-muted-foreground">{repo.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
