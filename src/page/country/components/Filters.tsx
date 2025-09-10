import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import {
  SORT_BY,
} from "../../../types/CountryType";
import { useCountrySelectors } from "../CountrySelector";
import React from "react";

const Filters = React.memo(() => {
  const setSearch = useCountrySelectors.setSearch();
  const sortBy = useCountrySelectors.sortBy();
  const setSortBy = useCountrySelectors.setSortBy();
  const page = useCountrySelectors.page();
  const prevPage = useCountrySelectors.prevPage();
  const nextPage = useCountrySelectors.nextPage();

  const [count, setCount] = useState<number>(0);


  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    setSearch(searchTerm);
  }, [debounceSearch]);

  console.log(">>>Filters-rerender")

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input
        type="search"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={sortBy}
        defaultValue={"sortBy"}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="sortBy" disabled>
          Sort By
        </option>
        <option value={SORT_BY.AREA}>Area</option>
        <option value={SORT_BY.POPULATION}>Population</option>
      </select>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button onClick={prevPage}>Prev</button>
        <div>{page}</div>
        <button onClick={nextPage}>Next</button>
      </div>

      <div>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <div>{count}</div>
      </div>
    </div>
  );
})

export default Filters;
