import { HeaderContext } from './GlobalContext';
import { useState, useRef } from 'react';

import { useMemo } from 'react';

export function HeaderProvider({ children }) {
  const inputHeaderRef = useRef(null);
  const searchContainerRef = useRef(null);

  const [search, setSearch] = useState('');

  const value = useMemo(
    () => ({
      search,
      setSearch,
      inputHeaderRef,
      searchContainerRef,
    }),
    [search],
  );
  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
}
