import type { StateCreator } from "zustand/vanilla";
import type { ICountry, SortByType } from "../../types/CountryType";
import { getCountries } from "../../api/CountryAPI";

export interface CountrySlice {
  country: {
    countries: ICountry[];
    filteredCountries: ICountry[];
    countryLoading: boolean;
    countryError: string | null;
    search: string;
    sortBy: SortByType | undefined;
    page: number;

    setCountries: (list: ICountry[]) => void;
    setFilteredCountries: (list: ICountry[]) => void;
    setCountryLoading: (isLoading: boolean) => void;
    setCountryError: (error: string | null) => void;
    fetchCountries: () => void;
    setSearch: (searchTerm: string) => void;
    setSortBy: (sortBy: SortByType | undefined) => void;
    setPage: (page: number) => void;
    prevPage: () => void;
    nextPage: () => void;
  };
}

const initialState = {
  countries: [],
  filteredCountries: [],
  countryLoading: false,
  countryError: null,
  search: "",
  sortBy: undefined,
  page: 1,
};

const createCountryActions = (set: any) => {
  return {
    setCountryLoading: (isLoading: boolean) =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            countryLoading: isLoading,
          },
        }),
        false,
        "country/countryLoading"
      ),
    setCountryError: (error: string | null) =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            countryError: error,
          },
        }),
        false,
        "country/countryError"
      ),
    setCountries: (list: ICountry[]) =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            countries: list,
          },
        }),
        false,
        "country/countries"
      ),
    setFilteredCountries: (list: ICountry[]) =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            filteredCountries: list,
          },
        }),
        false,
        "country/filteredCountries"
      ),
    fetchCountries: async () => {
      set(
        (state: any) => ({
          country: {
            ...state.country,
            countryLoading: true,
            countryError: null,
          },
        }),
        false,
        "country/fetch/start"
      );

      try {
        const data = await getCountries();
        set(
          (state: any) => ({
            country: { ...state.country, countries: data },
          }),
          false,
          "country/fetch/success"
        );
      } catch (err: any) {
        set(
          (state: any) => ({
            country: {
              ...state.country,
              countryError: err.message || "Failed to get countries",
            },
          }),
          false,
          "country/fetch/error"
        );
      } finally {
        set(
          (state: any) => ({
            country: { ...state.country, countryLoading: false },
          }),
          false,
          "country/fetch/end"
        );
      }
    },

    setSearch: (searchTerm: string) =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            search: searchTerm,
          },
        }),
        false,
        "country/search"
      ),
    setSortBy: (sortBy: SortByType | undefined) =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            sortBy: sortBy,
          },
        }),
        false,
        "country/sortBy"
      ),
    setPage: (page: number) =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            page: page,
          },
        }),
        false,
        "country/page"
      ),
    prevPage: () =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            page: state.country.page - 1,
          },
        }),
        false,
        "country/prevPage"
      ),
    nextPage: () =>
      set(
        (state: any) => ({
          country: {
            ...state.country,
            page: state.country.page + 1,
          },
        }),
        false,
        "country/nextPage"
      ),
  };
};

export const createCountrySlice: StateCreator<
  CountrySlice,
  [],
  [],
  CountrySlice
> = (set) => ({
  country: {
    ...initialState,
    ...createCountryActions(set),
  },
});
