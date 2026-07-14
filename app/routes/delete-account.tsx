import { LegalPage } from "~/components/legal-page";

export function meta() {
  return [{ title: "Delete your account - Cointer" }];
}

export default function DeleteAccount() {
  return (
    <LegalPage title="Delete your account" updated="2026-07-13">
      <p>
        This page explains how to delete your Cointer account and everything associated with it.
        Deletion is self-service, immediate, and permanent. You do not need to contact us or wait
        for anyone to process a request.
      </p>

      <h2>From the mobile app</h2>
      <ul>
        <li>Open the Cointer app.</li>
        <li>Go to the Settings tab.</li>
        <li>Scroll to the "Danger zone" section and tap "Delete everything".</li>
        <li>Confirm the deletion.</li>
      </ul>

      <h2>From the web app</h2>
      <ul>
        <li>
          Sign in at <a href="https://app.cointer.app">app.cointer.app</a> with your personal key.
        </li>
        <li>
          Open <a href="https://app.cointer.app/settings">Settings</a>.
        </li>
        <li>Scroll to the "Danger zone" section, click "Delete…", then type DELETE to confirm.</li>
      </ul>

      <h2>What gets deleted</h2>
      <p>
        Deleting your account immediately and permanently removes all data tied to your personal
        key:
      </p>
      <ul>
        <li>Your personal key (stored as a hash on our servers).</li>
        <li>All watched addresses and their labels.</li>
        <li>All notification channels (webhooks, ntfy topics, email addresses).</li>
        <li>All device push tokens.</li>
        <li>All activity history.</li>
      </ul>

      <h2>What is kept</h2>
      <p>
        Nothing. There is no retention period and no backup copy of your account data after
        deletion. Because Cointer accounts are anonymous personal keys with no email or password,
        deletion cannot be undone and a deleted account cannot be recovered.
      </p>

      <h2>Deleting some data without deleting your account</h2>
      <p>You can delete parts of your Cointer data at any time without deleting your account:</p>
      <ul>
        <li>
          <strong>Watched addresses</strong> — open the address in the app or web app and remove it.
          Activity already recorded for it is kept until the normal 90-day auto-delete.
        </li>
        <li>
          <strong>Notification channels</strong> (webhooks, ntfy topics, email addresses) — remove
          them from the Channels section.
        </li>
        <li>
          <strong>Device push tokens</strong> — remove them from Settings, or they are removed when
          you log out on that device.
        </li>
      </ul>
      <p>
        These deletions are immediate and permanent, with no retention period. Activity history is
        also automatically deleted after 90 days regardless.
      </p>

      <h2>Lost your personal key?</h2>
      <p>
        We store only a hash of your key, so we cannot look up or recover an account for you. If you
        have lost your key, the account is unreachable and all its data will sit unused; the
        activity history part of it still auto-deletes after 90 days. If you want the rest removed
        and cannot access the account, contact{" "}
        <a href="mailto:support@cointer.app">support@cointer.app</a> and we will do our best to
        help, though without the key we usually cannot verify ownership.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about deletion or your data can be sent to{" "}
        <a href="mailto:support@cointer.app">support@cointer.app</a>. See also our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
