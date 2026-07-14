export const APP_URL = "https://app.cointer.app";
export const API_URL = import.meta.env.VITE_API_URL ?? "https://api.cointer.app";

export const GITHUB_ORG = "https://github.com/Cointer-App";

export const SUPPORT_EMAIL = "support@cointer.app";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/cointer-crypto-wallet-alerts/id6790057534";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.cointer.mobile";

export const REPOS = [
  {
    name: "Web",
    description: "The web app. Manage your addresses and alerts from a browser.",
    url: "https://github.com/Cointer-App/Web",
  },
  {
    name: "Mobile",
    description:
      "The iOS and Android app. Does everything the web app does, plus push notifications.",
    url: "https://github.com/Cointer-App/Mobile",
  },
  {
    name: "Backend",
    description: "The server. Watches the blockchain and sends out alerts. Bun + Hono + SQLite.",
    url: "https://github.com/Cointer-App/Backend",
  },
] as const;

export const FEATURES = [
  {
    title: "No accounts",
    description:
      "You don't sign up with an email or password. You get one personal key, and we only store a hash of it, so there's nothing linking it to you.",
  },
  {
    title: "Never touches your funds",
    description:
      "Cointer just reads public blockchain data. It never has your private keys and can't move your money.",
  },
  {
    title: "Only new deposits",
    description:
      "When you add an address, old transactions are ignored. You only get alerts for deposits that come in after that.",
  },
  {
    title: "Alerts where you want them",
    description:
      "Push notifications on your phone, or ntfy, Discord, Slack, and email. You can test a channel first, and mute one address without muting the others.",
  },
  {
    title: "Activity feed",
    description:
      "See every deposit in your own currency, with daily, weekly, and monthly totals broken down by asset.",
  },
  {
    title: "Open source",
    description: "The backend, web app, and mobile app are all on GitHub.",
  },
] as const;
