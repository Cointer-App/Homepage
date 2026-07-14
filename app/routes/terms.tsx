import { LegalPage } from "~/components/legal-page";

export function meta() {
  return [{ title: "Terms of Service - Cointer" }];
}

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="2026-07-13">
      <p>
        These terms govern your use of Cointer (the "Service"), operated by us ("Cointer", "we",
        "us"). By creating a personal key or otherwise using the Service, you agree to these terms.
      </p>

      <h2>What Cointer is — and isn't</h2>
      <p>
        Cointer watches public blockchain addresses you provide and sends you a notification when
        they receive a deposit. Cointer:
      </p>
      <ul>
        <li>
          <strong>Never takes custody of funds.</strong> We never hold, control, or have access to
          your cryptocurrency, wallets, or private keys.
        </li>
        <li>
          <strong>Is not a financial service.</strong> We do not provide investment, trading,
          custody, or money-transmission services. Nothing in the Service is financial, legal, or
          tax advice.
        </li>
        <li>
          <strong>Is a notification tool, not a guarantee.</strong> Notifications depend on
          third-party blockchain data providers, RPC nodes, price feeds, and notification channels
          (Discord, Slack, ntfy, email, push) that we do not control. Delivery can be delayed,
          dropped, or fail outright.
        </li>
      </ul>

      <h2>Your personal key</h2>
      <ul>
        <li>
          Cointer has no accounts, usernames, or passwords. Your personal key is the sole means of
          accessing your data.
        </li>
        <li>
          We store only a hash of your key. If you lose it, we cannot recover it, reset it, or
          otherwise restore access. All data tied to that key becomes permanently inaccessible.
        </li>
        <li>You are solely responsible for keeping your personal key confidential and safe.</li>
        <li>
          Anyone who has your key can access and modify everything tied to it, including deleting
          your account. Treat it like a password.
        </li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose, including money laundering or fraud;</li>
        <li>
          Attempt to circumvent rate limits, abuse the key-minting endpoint, or otherwise overload
          or interfere with the Service;
        </li>
        <li>
          Use the Service to harass, spam, or send unsolicited notifications to third parties;
        </li>
        <li>Reverse engineer, scrape, or resell the Service without our written permission.</li>
      </ul>
      <p>
        We may suspend or delete keys that violate these terms, or that we reasonably believe are
        being used for abuse, without notice.
      </p>

      <h2>Limits</h2>
      <p>
        The Service enforces limits per personal key (currently up to 10 watched addresses, 10
        notification channels, and 10 push tokens, with 90 days of activity retention). These limits
        may change; current values are always available from the Service itself.
      </p>

      <h2>No warranty</h2>
      <p>
        The Service is provided "as is" and "as available," without warranties of any kind, express
        or implied, including but not limited to accuracy, reliability, uptime, or fitness for a
        particular purpose. Blockchain data, RPC nodes, and price feeds we rely on can be delayed,
        incorrect, or unavailable, and we make no guarantee that a notification will be sent, or
        sent in time, for any given transaction.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Cointer and its operators are not liable for any
        indirect, incidental, special, consequential, or punitive damages, or any loss of funds,
        profits, data, or opportunity, arising from your use of or inability to use the Service —
        including a missed, delayed, or failed notification, regardless of the cause. Cointer is a
        monitoring and alerting convenience tool, not a substitute for securing your own assets.
      </p>
      <p>
        To the extent this limitation is unenforceable in your jurisdiction, our total liability to
        you for any claim arising from the Service is limited to USD $0, as the Service is provided
        free of charge (or, if paid features exist in the future, the amount you paid us in the 12
        months before the claim arose).
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using the Service and delete your account at any time from Settings. We may
        suspend or discontinue the Service, in whole or in part, or terminate keys that violate
        these terms, at our discretion.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. If we make material changes, we'll update the
        date at the top of this page. Continued use after a change means you accept the updated
        terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Minnesota, USA, without regard to
        conflict of law principles.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:support@cointer.app">support@cointer.app</a>.
      </p>
    </LegalPage>
  );
}
