import { useState, useEffect, useCallback } from 'react';

const useConversations = ({
  initialPage = 1,
  limit = 1,
  initialConversations = [],
  autoFetch = true,
  specificId = null,
}) => {
  const [conversations, setConversations] = useState(initialConversations);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  const fetchConversations = useCallback(async (page) => {
    setLoading(true);
    try {
      let url = `/api/conversations?page=${page}&limit=${limit}`;
      if (specificId && !initialFetchDone) {
        url = `/api/conversations?specificId=${specificId}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('API response is not an array');
      }

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setConversations((prevConversations) => [...prevConversations, ...data]);
      }

      if (specificId && !initialFetchDone) {
        setInitialFetchDone(true);
      }
    } catch (err) {
      setError(err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  }, [limit, specificId, initialFetchDone]);

  useEffect(() => {
    if (autoFetch) {
      fetchConversations(page);
    }
  }, [page, autoFetch, fetchConversations]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return {
    conversations,
    loading,
    hasMore,
    loadMore,
    error,
  };
};

export default useConversations;