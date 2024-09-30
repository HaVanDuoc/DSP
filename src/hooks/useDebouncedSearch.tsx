import { useState, useEffect } from 'react';

const useDebouncedSearch = (searchTerm: string, delay = 500) => {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, delay);

    // Cleanup: Hủy timeout nếu searchTerm thay đổi trước khi timeout hoàn tất
    return () => clearTimeout(handler);
  }, [searchTerm, delay]);

  return debouncedTerm;
};

export default useDebouncedSearch;
