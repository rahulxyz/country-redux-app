import { v4 as uuidv4 } from "uuid";
import type { ICountry } from "../types/CountryType";

export const getCountries = async (): Promise<ICountry[]> => {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,capital,area,population";
  const response = await fetch(url);
  const data = await response.json();
  const formattedData = data.map((c: any) => ({
    id: uuidv4(),
    name: c.name.official,
    capital: c.capital.join(","),
    area: c.area,
    population: c.population,
  }));
  return formattedData;
};
