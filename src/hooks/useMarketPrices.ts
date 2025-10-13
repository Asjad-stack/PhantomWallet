import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { COINGECKO_API_BASE, COINGECKO_API_KEY, SOL_COINGECKO_ID } from '../constants/api';

type PricesMap = Record<string, number>;

interface UseMarketPricesOptions {
  symbols: string[]; // e.g., ['SOL', 'USDT']
  vsCurrency?: string; // e.g., 'usd'
}

export function useMarketPrices(options: UseMarketPricesOptions) {
  const { symbols, vsCurrency = 'usd' } = options;
  const [prices, setPrices] = useState<PricesMap>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const { ids, idsKey } = useMemo(() => {
    const mapped = symbols
      .map((s) => s.toUpperCase())
      .map((s) => (s === 'SOL' ? SOL_COINGECKO_ID : s === 'USDT' ? 'tether' : null))
      .filter(Boolean) as string[];
    return { ids: mapped, idsKey: mapped.join(',') };
  }, [JSON.stringify(symbols)]);

  const fetchPrices = useCallback(async () => {
    if (!ids.length) return;
    try {
      setLoading(true);
      setError(null);

      abortRef.current?.abort();
      abortRef.current = new AbortController();

      const url = `${COINGECKO_API_BASE}/simple/price?ids=${encodeURIComponent(
        idsKey
      )}&vs_currencies=${encodeURIComponent(vsCurrency)}`;

      const res = await fetch(url, {
        headers: {
          'x-cg-demo-api-key': COINGECKO_API_KEY,
          Accept: 'application/json',
        },
        signal: abortRef.current.signal,
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`CoinGecko error ${res.status}: ${text}`);
      }
      const data = (await res.json()) as Record<string, Record<string, number>>;
      const next: PricesMap = {};
      Object.keys(data).forEach((id) => {
        const price = data[id]?.[vsCurrency];
        if (typeof price === 'number') next[id] = price;
      });
      setPrices(next);
    } catch (e: any) {
      if (e?.name === 'AbortError') return;
      setError(e?.message || 'Failed to fetch prices');
    } finally {
      setLoading(false);
    }
  }, [ids.length, idsKey, vsCurrency]);

  useEffect(() => {
    fetchPrices();
    return () => abortRef.current?.abort();
  }, [idsKey, vsCurrency]);

  const getPriceForSymbol = useCallback(
    (symbol: string) => {
      const id = symbol.toUpperCase() === 'SOL' ? SOL_COINGECKO_ID : symbol.toUpperCase() === 'USDT' ? 'tether' : '';
      if (!id) return undefined;
      return prices[id];
    },
    [prices]
  );

  return {
    prices,
    loading,
    error,
    refresh: fetchPrices,
    getPriceForSymbol,
  };
}

export default useMarketPrices;


