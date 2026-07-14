import { useCallback, useEffect, useRef, useState } from "react";

export function useCopyToClipboard(resetAfterMs = 1500) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setCopied(false), resetAfterMs);
      } catch {
        setCopied(false);
      }
    },
    [resetAfterMs],
  );

  return { copied, copy };
}
