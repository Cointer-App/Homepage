import { LegalPage } from "~/components/legal-page";

export function meta() {
  return [{ title: "Privacy Policy - Cointer" }];
}

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="2026-07-13">
      <p>
        Cointer ("Cointer", "we", "us") provides a service that watches public blockchain addresses
        you add and notifies you when they receive funds. This policy explains what data we collect,
        why, and how you can remove it.
      </p>

      <h2>No accounts, no identity</h2>
      <p>
        Cointer does not use email addresses, passwords, or any other identity information to create
        an account. When you sign up, we generate a random "personal key" and show it to you once.
        We store only a one-way cryptographic hash of that key, never the key itself. We have no way
        to recover a lost key, reset it, or link it to your real identity unless you put identifying
        information into a notification channel (for example, an email address you configure for
        email alerts).
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Watched addresses</strong> — the public blockchain addresses you add, and any
          label you give them. These are public information on the blockchain; adding one here does
          not prove you own it.
        </li>
        <li>
          <strong>Activity history</strong> — deposits observed on your watched addresses
          (transaction hash, amount, asset, timestamp), kept for up to 90 days.
        </li>
        <li>
          <strong>Notification channel configuration</strong> — webhook URLs (Discord, Slack), ntfy
          server/topic, or an email address, if you choose to add them.
        </li>
        <li>
          <strong>Push tokens</strong> — device push tokens (via Expo) if you use the mobile app, so
          we can deliver native notifications.
        </li>
        <li>
          <strong>IP addresses</strong> — processed transiently for rate limiting/abuse prevention.
          Not stored long-term or linked to your personal key.
        </li>
      </ul>
      <p>
        We do not collect your name, government ID, physical address, payment details, or wallet
        private keys. Cointer never has custody of, or access to, your funds — it only reads public
        on-chain data.
      </p>

      <h2>Why we collect it</h2>
      <p>
        Every piece of data above exists to run the core function of the service: watching an
        address and telling you when it receives money, through the channel you asked for. We do not
        use your data for advertising, and we do not sell it.
      </p>

      <h2>Who we share data with</h2>
      <p>
        Cointer is built on several third-party services that necessarily see parts of your data as
        part of delivering the feature:
      </p>
      <ul>
        <li>
          <strong>Blockchain data providers</strong> (e.g. mempool.space for Bitcoin, a public
          Ethereum RPC provider) — receive the addresses you watch, so they can tell us about new
          transactions. These are public blockchain queries.
        </li>
        <li>
          <strong>CoinGecko</strong> — used to price deposits in fiat currency. No personal or
          account data is sent, only asset ticker lookups.
        </li>
        <li>
          <strong>Discord / Slack</strong> — if you add a webhook, deposit notifications are sent to
          the webhook URL you provide. That data is then governed by Discord's/Slack's own policies.
        </li>
        <li>
          <strong>ntfy.sh (or a self-hosted ntfy server you specify)</strong> — if you use the ntfy
          channel, notifications are published to the topic you configure.
        </li>
        <li>
          <strong>Email delivery provider</strong> (Cloudflare Email or an SMTP provider we
          configure) — if you add an email channel, your email address and deposit alerts are sent
          through that provider.
        </li>
        <li>
          <strong>Expo</strong> — used to deliver native push notifications to the mobile app using
          your device's push token.
        </li>
        <li>
          <strong>Our hosting/infrastructure providers</strong> — run the servers and database that
          store the data above.
        </li>
      </ul>
      <p>
        We do not otherwise sell, rent, or share your data with third parties, and we do not use it
        for advertising or profiling.
      </p>

      <h2>How long we keep data</h2>
      <p>
        Activity history is retained for 90 days and then automatically deleted. Addresses, channel
        configuration, and push tokens are kept until you remove them or delete your account.
        Deleting your account (available at any time from Settings) immediately and permanently
        deletes all data tied to your personal key — addresses, channels, push tokens, and activity
        history. This cannot be undone.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Remove any watched address, channel, or push token at any time.</li>
        <li>Mute notifications per address or per channel without deleting anything.</li>
        <li>Rotate your personal key at any time — the old key stops working immediately.</li>
        <li>Delete your account and all associated data at any time from Settings.</li>
      </ul>

      <h2>Children</h2>
      <p>Cointer is not directed at, and is not intended for use by, children under 16.</p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes materially, we'll update the date at the top of this page. Continued
        use of Cointer after a change means you accept the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data can be sent to{" "}
        <a href="mailto:support@cointer.app">support@cointer.app</a>.
      </p>
    </LegalPage>
  );
}
