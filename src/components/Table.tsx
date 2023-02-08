import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Pagination from './Pagination';

type Country = {
  name: string;
  region: string;
  area: number;
};

function Table() {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [sortAlphabet, setSortAlphabet] = useState<String>('asc');
  const [sortRegion, setSortRegion] = useState<String>('asc');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  // Fetch and display the list of countries
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all?fields=name,region,area`)
      .then((response) => {
        setAllCountries(response.data);
        setFilteredCountries(response.data);
      });
  }, []);

  // Make the list sortable alphabetically by name (ascending, descending).
  const handleSortAlpha = () => {
    const sortedCountries = allCountries.sort((a, b) => {
      if (sortAlphabet === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredCountries(sortedCountries);
    setSortAlphabet(sortAlphabet === 'asc' ? 'desc' : 'asc');
  };

  // Make the list sortable alphabetically by region (ascending, descending).
  const handleSortRegion = () => {
    const sortedCountries = allCountries.sort((a, b) => {
      if (sortRegion === 'asc') {
        return a.region.localeCompare(b.region);
      } else {
        return b.region.localeCompare(a.region);
      }
    });
    setFilteredCountries(sortedCountries);
    setSortRegion(sortRegion === 'asc' ? 'desc' : 'asc');
  };

  // Implement a filter(s) that filters countries:
  // - That are smaller than Lithuania by area.
  // - That are in “Oceania” region.
  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    let filteredData = [];
    if (filterValue === 'area') {
      filteredData = allCountries.filter((country) => country.area < 65200);
    } else if (filterValue === 'region') {
      filteredData = allCountries.filter(
        (country) => country.region === 'Oceania'
      );
    } else {
      filteredData = allCountries;
    }
    setFilteredCountries(filteredData);
  };

  // Paginnation logic
  const lastCountryIndex = currentPage * countriesPerPage;
  const firstPostIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    firstPostIndex,
    lastCountryIndex
  );

  return (
    <div>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Country List</h1>
        <div className="flex justify-between mb-4">
          <div className="flex justify-between gap-4">
            <button
              className="btn btn-blue border border-1 p-2 rounded-md hover:bg-green-200"
              onClick={handleSortAlpha}
            >
              Sort by Name
            </button>

            <button
              className="btn btn-blue btn btn-blue border border-1 p-2 rounded-md hover:bg-green-200"
              onClick={handleSortRegion}
            >
              Sort by Region
            </button>
          </div>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleFilter}
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
            {currentCountries.map((country) => {
              return (
                <TableRow
                  key={country.name}
                  country={country.name}
                  region={country.region}
                  area={country.area}
                />
              );
            })}
          </tbody>
        </table>
        <Pagination
          allCountries={allCountries.length}
          countriesPerPage={countriesPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Table;
