import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import ListView from "./components/ListView";
import { useCountrySelectors } from "./CountrySelector";
import type { ICountry, SortByType } from "../../types/CountryType";

const PAGE_SIZE = 10;

const handleSort = (a: ICountry, b: ICountry, sortBy?: SortByType) => {
  if (!sortBy) return 0;
  const key = sortBy.toLowerCase() as keyof Pick<
    ICountry,
    "area" | "population"
  >;
  return a[key] - b[key];
};

const Country = () => {
  const fetchCountries = useCountrySelectors.fetchCountries();
  const countries = useCountrySelectors.countries();
  const setFilteredCountries = useCountrySelectors.setFilteredCountries();

  const search = useCountrySelectors.search();
  const sortBy = useCountrySelectors.sortBy();

  const page = useCountrySelectors.page();

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const start = (page - 1) * PAGE_SIZE + 1;
    const end = start + PAGE_SIZE;

    const filtered = countries
      .filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => handleSort(a, b, sortBy))
      .slice(start, end);

    setFilteredCountries(filtered);
  }, [countries, search, sortBy, page]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <div>{count}</div>
      <Filters />
      <ListView />
    </>
  );
};

export default Country;
