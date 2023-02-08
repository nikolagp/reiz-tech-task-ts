import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

type Country = {
  name: string;
  region: string;
  area: number;
};

function Table() {
  // Fetch the data from the endpoint
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all?fields=name,region,area`)
      .then((response) => {
        setAllCountries(response.data);
      });
  }, [allCountries]);
  //   Display a list for the data.
  // • Make the list sortable alphabetically by name (ascending, descending).
  // • Implement a filter(s) that filters countries:
  // - That are smaller than Lithuania by area.
  // - That are in “Oceania” region.
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Country List</h1>
        <div className="flex justify-between mb-4">
          {/* <button className="btn btn-blue" onClick={handleSort}> */}
          <button className="btn btn-blue">Sort by Name</button>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              // onChange={handleFilter}
            >
              <option value="all">All</option>
              <option value="area">Area smaller than Lithuania</option>
              <option value="region">Oceania</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="w-1/3 p-4">Name</th>
              <th className="w-1/3 p-4">Region</th>
              <th className="w-1/3 p-4">Area</th>
            </tr>
          </thead>
          <tbody>
            {allCountries.map((country) => {
              return (
                <tr key={country.name} className="border-b text-center">
                  <td className="p-4 text-red-400">{country.name}</td>
                  <td className="p-4">{country.region}</td>
                  <td className="p-4">{country.area}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
