import { API_URL } from "~/lib/site";

export interface ChainInfo {
  id: string;
  name: string;
  asset: string;
}

export async function getChains(): Promise<ChainInfo[] | null> {
  try {
    const res = await fetch(`${API_URL}/chains`, {
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { chains?: ChainInfo[] };
    return Array.isArray(data.chains) ? data.chains : null;
  } catch {
    return null;
  }
}

export async function getWatchedWallets(): Promise<number | null> {
  try {
    const res = await fetch(`${API_URL}/stats/wallets`, {
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { watchedWallets?: number };
    return typeof data.watchedWallets === "number" ? data.watchedWallets : null;
  } catch {
    return null;
  }
}
