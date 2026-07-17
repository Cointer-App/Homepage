import { CheckIcon, CopyIcon } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

import type { Route } from "./+types/donate";
import { PageShell } from "~/components/page-shell";
import { Button } from "~/components/ui/button";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { getWatchedWallets } from "~/lib/api";

export function meta() {
  return [
    { title: "Donate - Cointer" },
    {
      name: "description",
      content: "Donations cover Cointer's server costs and keep the app free.",
    },
  ];
}

export async function loader() {
  return { watchedWallets: await getWatchedWallets() };
}

type Wallet = {
  chain: string;
  asset: string;
  address: string;
  preferred?: boolean;
  note?: string;
};

const WALLETS: Wallet[] = [
  {
    chain: "Base",
    asset: "ETH",
    address: "0x67e0C779119D9BcC2187564A66B80a58767d05d",
    preferred: true,
    note: "Cheapest fees, so more of your donation gets through.",
  },
  {
    chain: "Ethereum",
    asset: "ETH",
    address: "0x67e0C779119D9BcC2187564A66B80a58767d05d",
    note: "Same address as Base.",
  },
  {
    chain: "Bitcoin",
    asset: "BTC",
    address: "bc1qhuguk8gckzk6agzth2nc4duad2wuv0qhcukz3e",
  },
  {
    chain: "Bitcoin Cash",
    asset: "BCH",
    address: "bitcoincash:qqgx7hrq7m7fy27rely635t7jx66ugtm85n4u9mmhm",
  },
  {
    chain: "Solana",
    asset: "SOL",
    address: "FA42vgp3A2P5aywwD7Qev7GyZK1Yd5p2cfLLGZ5Vs5cv",
  },
  {
    chain: "Litecoin",
    asset: "LTC",
    address: "ltc1q04y9m60lawy3cscjpy6svfagmag34rr5gdkz97",
  },
  {
    chain: "Monero",
    asset: "XMR",
    address: "06c24e572b2c58046b237c8845dc8b9ba9a0e26b8a46b52e72a04c00bcf31f03",
  },
];

function WalletCard({ wallet }: { wallet: Wallet }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-md bg-white p-1.5">
          <QRCodeSVG
            value={wallet.address}
            size={96}
            aria-label={`${wallet.chain} address QR code`}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-sm font-medium">
              {wallet.chain}
              {wallet.preferred && (
                <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                  Preferred
                </span>
              )}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">{wallet.asset}</span>
          </div>
          {wallet.note && (
            <p className="mt-1 text-xs/relaxed text-muted-foreground">{wallet.note}</p>
          )}
          <div className="mt-3 flex items-center gap-2">
            <code className="min-w-0 flex-1 truncate rounded-md bg-muted px-2 py-1.5 font-mono text-xs">
              {wallet.address}
            </code>
            <Button
              variant="outline"
              size="icon"
              aria-label={`Copy ${wallet.chain} address`}
              onClick={() => copy(wallet.address)}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Donate({ loaderData }: Route.ComponentProps) {
  const { watchedWallets } = loaderData;

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-2xl px-4 py-10">
        <h1 className="text-xl font-semibold tracking-tight">Donate</h1>
        <p className="mt-2 text-sm/relaxed text-muted-foreground">
          Cointer is free, with no ads or paid tier. Donations pay for the servers that keep it
          running, and the more that comes in, the more chains we can add support for.
          {watchedWallets !== null && (
            <>
              {" "}
              Right now it's watching{" "}
              <span className="font-mono font-medium text-foreground">
                {watchedWallets.toLocaleString()}
              </span>{" "}
              {watchedWallets === 1 ? "wallet" : "wallets"}.
            </>
          )}
        </p>

        <h2 className="mt-10 text-sm font-semibold tracking-tight">Wallets</h2>
        <p className="mt-1.5 text-xs/relaxed text-muted-foreground">
          Scan a code or copy an address. Base is the best option since fees there are close to
          nothing. Send only the listed asset on its own chain.
        </p>
        <div className="mt-3 flex flex-col gap-3">
          {WALLETS.map((wallet) => (
            <WalletCard key={wallet.chain} wallet={wallet} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
