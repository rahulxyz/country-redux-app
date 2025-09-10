export interface ICountry {
  id: string;
  name: string;
  capital: string;
  area: number;
  population: number;
}

export const SORT_BY = {
  AREA: "AREA",
  POPULATION: "POPULATION",
};

// type SortByType = "AREA" | "POPULATION";
export type SortByType = typeof SORT_BY[keyof typeof SORT_BY];

