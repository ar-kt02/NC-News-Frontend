export const updateQueryParams = (newParams, searchParams, setSearchParams) => {
  const newSearchParams = new URLSearchParams(searchParams);

  newParams.forEach(([key, value]) => {
    if (value) {
      newSearchParams.set(key, value);
    } else {
      newSearchParams.delete(key);
    }
  });

  setSearchParams(newSearchParams);
};
