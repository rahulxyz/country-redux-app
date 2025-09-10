import { useBoundStore } from "../../store/store";

export const useCountrySelectors = {
  // ✅ state
  countries: () => useBoundStore((s) => s.country.countries),
  filteredCountries: () => useBoundStore((s) => s.country.filteredCountries),
  countryLoading: () => useBoundStore((s) => s.country.countryLoading),
  countryError: () => useBoundStore((s) => s.country.countryError),
  search: () => useBoundStore((s) => s.country.search),
  sortBy: () => useBoundStore((s) => s.country.sortBy),
  page: () => useBoundStore((s) => s.country.page),

  // ✅ actions
  setCountryLoading: () => useBoundStore((s) => s.country.setCountryLoading),
  setCountryError: () => useBoundStore((s) => s.country.setCountryError),
  setCountries: () => useBoundStore((s) => s.country.setCountries),
  setFilteredCountries: () => useBoundStore((s) => s.country.setFilteredCountries),
  fetchCountries: () => useBoundStore((s) => s.country.fetchCountries),
  setSearch: () => useBoundStore((s) => s.country.setSearch),
  setSortBy: () => useBoundStore((s) => s.country.setSortBy),
  setPage: () => useBoundStore((s) => s.country.setPage),
  prevPage: () => useBoundStore((s) => s.country.prevPage),
  nextPage: () => useBoundStore((s) => s.country.nextPage),
};