import React from "react";
import type { ICountry } from "../../../types/CountryType";
import { useCountrySelectors } from "../CountrySelector";

const ListView = React.memo(() => {
  const countries = useCountrySelectors.filteredCountries();
  const countryLoading = useCountrySelectors.countryLoading();
  const countryError = useCountrySelectors.countryError();
  console.log(">>>ListView-rerender")


  if (countryError) return <div>Something went wrong</div>;

  if (countryLoading) return <div>loading ...</div>;

  if (countries.length == 0) return <div>No countries found.</div>;

  return (
    <div>
      <table
        style={{
          width: "600px",
        }}
      >
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Area</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((item: ICountry) => {
            return (
              <tr key={item.id}>
                <td
                  style={{
                    maxWidth: "10px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.id}
                </td>
                <td>{item.name}</td>
                <td>{item.capital}</td>
                <td>{item.area}</td>
                <td>{item.population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
})

export default ListView;
