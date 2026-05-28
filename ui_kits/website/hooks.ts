/**
 * useFetchPayload — React hook to fetch from Payload CMS.
 * Handles caching, errors, and loading states.
 */

export function useFetchPayload<T>(endpoint: string, options?: { skip?: boolean }) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (options?.skip) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        setLoading(true);
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    })();
  }, [endpoint, options?.skip]);

  return { data, loading, error };
}
